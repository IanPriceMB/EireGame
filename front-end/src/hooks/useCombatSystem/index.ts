import {
  useState, useCallback, useEffect, Dispatch, SetStateAction,
} from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ActiveAbility,
  Ally, Characters, CombatAction, Combatant, Enemy, StatusOption,
} from '../../GlobalTypes';

export interface CombatSchematics {
  inTargetingMode: boolean,
  setTargetingMode: Dispatch<SetStateAction<boolean>>,
  activeAbility: ActiveAbility,
  setActiveAbility: Dispatch<SetStateAction<ActiveAbility>>,
  terrain:string,
  selectedEnemy?:Enemy,
  isPlayerTurn:boolean,
  remainingAP:number,
  enemies:Enemy[],
  allies:Ally[],
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
  const [allies, setAllies] = useState<Ally[]>([{
    statuses: ['poison'] as StatusOption[],
    name: 'artemis',
    key: 'artemis',
    currentHealth: 20,
    isEnemy: false,
    maxHealth: 20,
    oghams: [{
      name: 'fire arrow',
      id: 'artemis-fireArrow',
      handleClick: () => undefined,
      image: `${process.env.PUBLIC_URL}/icons/enchantment.svg`,
      apCost: 1,
      identifier: Characters.Artemis,
    },
    {
      name: 'ice arrow',
      id: 'artemis-iceArrow',
      handleClick: () => undefined,
      image: `${process.env.PUBLIC_URL}/icons/enchantment.svg`,
      apCost: 1,
      identifier: Characters.Artemis,
    },
    {
      name: 'dark arrow',
      id: 'artemis-darkArrow',
      handleClick: () => undefined,
      image: `${process.env.PUBLIC_URL}/icons/enchantment.svg`,
      apCost: 1,
      identifier: Characters.Artemis,
    }],
    abilities: [{
      name: 'ability',
      id: 'artemis-ability',
      handleClick: () => undefined,
      image: `${process.env.PUBLIC_URL}/icons/ability.svg`,
      apCost: 1,
      identifier: Characters.Artemis,
    }],
    tinctures: [{
      name: 'tincture',
      id: 'artemis-tincture',
      handleClick: () => undefined,
      image: `${process.env.PUBLIC_URL}/icons/tincture.svg`,
      remainingUses: 3,
      apCost: 1,
      identifier: Characters.Artemis,
    }],
  }]);
  const [selectedEnemy, setSelectedEnemy] = useState<Enemy>();
  const [isPlayerTurn, setPlayerTurn] = useState(false);
  const [remainingAP, setRemainingAP] = useState(10);
  const [inTargetingMode, setTargetingMode] = useState(false);
  const [activeAbility, setActiveAbility] = useState<ActiveAbility>();

  return {
    terrain,
    selectedEnemy,
    isPlayerTurn,
    remainingAP,
    enemies,
    allies,
    inTargetingMode,
    setTargetingMode,
    activeAbility,
    setActiveAbility,
  };
}
