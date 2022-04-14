/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  useState, useEffect, Dispatch, SetStateAction, useMemo, useCallback, useRef,
} from 'react';
import difference from 'lodash/difference';
import {
  ActiveAbility,
  CardSelectState, Characters, EnemyData,
} from '../../GlobalTypes';
import { randomZeroToXWhole } from '../../utils';

export interface CombatSchematics {
  inTargetingMode: boolean,
  setTargetingMode: Dispatch<SetStateAction<boolean>>,
  activeAbility?: ActiveAbility,
  setActiveAbility: Dispatch<SetStateAction<ActiveAbility>>,
  terrain:string,
  isPlayerTurn:boolean,
  remainingAP:number,
  enemies:EnemyData[],
  allies: Characters[],
  target?: CardSelectState,
  resolution?: CardSelectState,
  setTarget: Dispatch<SetStateAction<CardSelectState | undefined>>,
  isBattleOver: 'win'|'loss'|undefined;
  handleKnockout: (identifier: string|Characters) => void
  activeEnemy: string|undefined;
  artemisCard: React.Ref<HTMLButtonElement> | undefined
  fangCard: React.Ref<HTMLButtonElement> | undefined
  saoirseCard: React.Ref<HTMLButtonElement> | undefined
  mordredCard: React.Ref<HTMLButtonElement> | undefined
  beaCard: React.Ref<HTMLButtonElement> | undefined
}

export function useCombatSystem():CombatSchematics {
  const terrain = useMemo(() => `${process.env.PUBLIC_URL}/images/backgrounds/deepWater.jpg`, []);
  const artemisCard = useRef<any>();
  const fangCard = useRef<any>();
  const saoirseCard = useRef<any>();
  const mordredCard = useRef<any>();
  const beaCard = useRef<any>();
  const [enemies, setEnemies] = useState<EnemyData[]>([{
    name: 'selkie',
    identifier: 'selkie1',
    currentHealth: 10,
    maxHealth: 10,
    isEnemy: true,
    fullArtSrc: `${process.env.PUBLIC_URL}/images/enemies/selkie.jpg`,
  }, {
    name: 'kelpie',
    identifier: 'kelpie1',
    currentHealth: 10,
    maxHealth: 10,
    isEnemy: true,
    fullArtSrc: `${process.env.PUBLIC_URL}/images/enemies/kelpie.png`,
  },
  {
    name: 'selkie',
    identifier: 'selkie2',
    currentHealth: 10,
    maxHealth: 10,
    isEnemy: true,
    fullArtSrc: `${process.env.PUBLIC_URL}/images/enemies/selkie.jpg`,
  }]);
  const [allies, setAllies] = useState<Characters[]>([
    Characters.Artemis,
    Characters.Bea,
    Characters.Fang,
    Characters.Saoirse,
    Characters.Mordred,
  ]);
  const [isPlayerTurn, setPlayerTurn] = useState(false);
  const [activeEnemy, setActiveEnemy] = useState<string|undefined>();
  const [remainingAP, setRemainingAP] = useState(2);
  const [activeAbility, setActiveAbility] = useState<ActiveAbility>();
  const [inTargetingMode, setTargetingMode] = useState(false);
  const [target, setTarget] = useState<CardSelectState | undefined>();
  const [resolution, setResolution] = useState<CardSelectState | undefined>();
  const [delayTimer, setDelayTimer] = useState(false);
  const [knockedOut, setKnockedOut] = useState<string[]>([]);
  const [isBattleOver, setBattleOver] = useState<'loss'|'win'|undefined>();

  // ai set our active enemny
  useEffect(() => {
    if (!isPlayerTurn && !activeAbility && !target && !activeEnemy && !delayTimer) {
      setActiveEnemy(enemies[randomZeroToXWhole(enemies.length - 1)].identifier);
    }
  }, [activeAbility, activeEnemy, delayTimer, enemies, isPlayerTurn, target]);

  // if there is an ability selected we are in targeting mode
  useEffect(
    () => (activeAbility ? setTargetingMode(true) : setTargetingMode(false)),
    [activeAbility],
  );

  // the enemy has chosen a skill now we will select a target
  useEffect(() => {
    if (!isPlayerTurn && activeAbility && !target && activeEnemy && inTargetingMode) {
      const choice = allies[randomZeroToXWhole(allies.length - 1)] as Characters;
      switch (choice) {
        case Characters.Saoirse:
          saoirseCard.current.click();
          break;
        case Characters.Fang:
          fangCard.current.click();
          break;
        case Characters.Artemis:
          artemisCard.current.click();
          break;
        case Characters.Bea:
          beaCard.current.click();
          break;
        case Characters.Mordred:
          mordredCard.current.click();
          break;
        default:
          break;
      }
    }
  }, [activeAbility, activeEnemy, allies, inTargetingMode, isPlayerTurn, target]);

  // if there is an ability and a target resolve the action
  useEffect(() => {
    if (activeAbility && target) {
      let result = target?.currentHealth;

      if (activeAbility?.name === 'attack' && Boolean(target)) {
        result = target.currentHealth - 5;
      }

      setResolution({
        ...target,
        currentHealth: result,
      });

      if (activeAbility?.apCost && Boolean(activeAbility)) {
        const newAp = remainingAP - activeAbility.apCost;
        setRemainingAP(newAp);
      }
      setActiveAbility(undefined);
      setTarget(undefined);
      if (!isPlayerTurn) {
        setActiveEnemy(undefined);
        setDelayTimer(true);
      }
    }
  }, [activeAbility, isPlayerTurn, remainingAP, target]);

  // delay the ai from going too fast
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (!isPlayerTurn && delayTimer) {
      interval = setInterval(() => {
        setDelayTimer(false);
      }, 1000);
    }
    return () => clearInterval(interval);
  });

  // if remaining ap runs out we reset and move turn
  useEffect(() => {
    if (remainingAP <= 0) {
      setRemainingAP(2);
      setPlayerTurn(!isPlayerTurn);
    }
  }, [isPlayerTurn, remainingAP]);

  const handleKnockout = useCallback(
    (identifier: string|Characters):void => setKnockedOut((s) => [...s, identifier]),
    [],
  );

  // if all of one set is 0 battle ends
  useEffect(() => {
    if (knockedOut.length >= 1) {
      if (difference(allies, knockedOut).length === 0) {
        setBattleOver('loss');
      } else if (difference(enemies.map((e) => e.identifier), knockedOut).length === 0) {
        setBattleOver('win');
      }
    }
  }, [allies, enemies, knockedOut, knockedOut.length]);

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
    isBattleOver,
    handleKnockout,
    activeEnemy,
    artemisCard,
    fangCard,
    saoirseCard,
    mordredCard,
    beaCard,
  };
}
