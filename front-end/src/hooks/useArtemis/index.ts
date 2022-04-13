import React, {
  useState, useCallback, Dispatch, SetStateAction,
} from 'react';
import {
  ActiveAbility,
  CardSelect, Characters, CombatAction, CombatActionClick,
} from '../../GlobalTypes';

export type AttackProps = {
  handleAttack: () => void
}

export interface Artemis {
  name: string;
  currentHealth: number;
  maxHealth: number;
  oghams: CombatAction[];
  abilities: CombatAction[];
  tinctures: CombatAction[];
  attackConfig: CombatAction
  key: Characters,
  handleBack?: () => void,
  isOpen?: boolean;
  onCardSelect: CardSelect,
  isEnemy: boolean,
  inTargetingMode: boolean,
  handleCancel: () => void
}

type useCharacterProps = {
  inTargetingMode: boolean,
  setTargetingMode: Dispatch<SetStateAction<boolean>>,
  activeAbility: ActiveAbility,
  setActiveAbility: Dispatch<SetStateAction<ActiveAbility>>,
}

export function useArtemis({
  inTargetingMode,
  setTargetingMode,
  activeAbility,
  setActiveAbility,
}:useCharacterProps):Artemis {
  const [currentHealth, setCurrentHealth] = useState(10);
  const [maxHealth, setMaxHealth] = useState(20);
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const oghamsList = ['Oak', 'Rowan', 'Aspen'];
  const abilitiesList = ['Dark Arrow', 'Gadget Trap'];
  const tincturesList = ['Potion'];
  const name = Characters.Artemis;
  const key = Characters.Artemis;
  const isEnemy = false;

  const handleCancel = ():void => setTargetingMode(false);

  const handleBack = ():void => setIsOptionsOpen(false);

  const handleActionButton: CombatActionClick = (e, state) => {
    e.stopPropagation();
    setActiveAbility(state);
    setIsOptionsOpen(false);
    setTargetingMode(true);
  };

  const onCardSelect: CardSelect = (e, state) => {
    setIsOptionsOpen(true);
  };

  const onTargetSelect: CardSelect = (e, state) => {
    setIsOptionsOpen(false);
    setTargetingMode(false);
    console.log(state);
  };

  const actionConfigTransform = (string:string, icon:string):CombatAction => ({
    name: string,
    id: `${Characters.Artemis}${string.replace(/\s/g, '')}`,
    image: `${process.env.PUBLIC_URL}/icons/${icon}.svg`,
    apCost: 1,
    handleClick: handleActionButton,
    identifier: Characters.Artemis,
  });

  const attackConfig = actionConfigTransform('attack', 'rangedAttack');

  const oghams = oghamsList.map<CombatAction>(
    (o:string) => actionConfigTransform(o, 'ogham'),
  );
  const abilities = abilitiesList.map<CombatAction>(
    (a:string) => actionConfigTransform(a, 'ability'),
  );
  const tinctures = tincturesList.map<CombatAction>(
    (t:string) => actionConfigTransform(t, 'tincture'),
  );

  return {
    name,
    currentHealth,
    maxHealth,
    oghams,
    abilities,
    tinctures,
    attackConfig,
    key,
    onCardSelect: inTargetingMode ? onTargetSelect : onCardSelect,
    isOpen: isOptionsOpen,
    isEnemy,
    inTargetingMode,
    handleCancel,
    handleBack,
  };
}
