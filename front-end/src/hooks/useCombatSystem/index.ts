import {
  useState, useEffect, Dispatch, SetStateAction,
} from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ActiveAbility,
  Ally, Combatant, Enemy,
} from '../../GlobalTypes';

export interface CombatSchematics {
  inTargetingMode: boolean,
  setTargetingMode: Dispatch<SetStateAction<boolean>>,
  activeAbility?: ActiveAbility,
  setActiveAbility: Dispatch<SetStateAction<ActiveAbility>>,
  terrain:string,
  isPlayerTurn:boolean,
  remainingAP:number,
  enemies:Enemy[],
  allies:Ally[],
  target?: Combatant,
  resolution?: Combatant,
  setTarget: Dispatch<SetStateAction<Combatant | undefined>>,
}

export function useCombatSystem():CombatSchematics {
  const navigate = useNavigate();
  const terrain = `${process.env.PUBLIC_URL}/images/backgrounds/deepWater.jpg`;
  const [enemies, setEnemies] = useState<Enemy[]>([{
    name: 'selkie',
    key: 'selkie1',
    currentHealth: 10,
    maxHealth: 10,
    isEnemy: true,
  }]);
  const [allies, setAllies] = useState<Ally[]>([]);
  const [isPlayerTurn, setPlayerTurn] = useState(false);
  const [remainingAP, setRemainingAP] = useState(10);
  const [inTargetingMode, setTargetingMode] = useState(false);
  const [activeAbility, setActiveAbility] = useState<ActiveAbility>();
  const [target, setTarget] = useState<Combatant | undefined>();
  const [resolution, setResolution] = useState<Combatant | undefined>();

  // if there is an ability selected we are in targeting mode
  useEffect(
    () => (activeAbility ? setTargetingMode(true) : setTargetingMode(false)),
    [activeAbility],
  );

  // if there is an ability and a target resolve the action
  useEffect(() => {
    if (activeAbility && target) {
      let result = target?.currentHealth;

      if (activeAbility?.name === 'attack') {
        // eslint-disable-next-line no-unsafe-optional-chaining
        result = target?.currentHealth - 1 || target.currentHealth;
      }

      setResolution({
        ...target,
        currentHealth: result,
      });

      setActiveAbility(undefined);
      setTarget(undefined);
    }
  }, [activeAbility, target]);

  return {
    terrain,
    isPlayerTurn,
    remainingAP,
    enemies,
    allies,
    inTargetingMode,
    setTargetingMode,
    activeAbility,
    setActiveAbility,
    target,
    setTarget,
    resolution,
  };
}
