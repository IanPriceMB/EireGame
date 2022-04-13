import React, {
  useState, useCallback, Dispatch, SetStateAction, useMemo, useEffect,
} from 'react';
import {
  ActiveAbility,
  CardSelect, Characters, CombatAction, CombatActionClick, Combatant,
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
  activeAbility?: ActiveAbility,
  setActiveAbility: Dispatch<SetStateAction<ActiveAbility>>,
  target?: Combatant,
  resolution?: Combatant,
  setTarget: Dispatch<SetStateAction<Combatant | undefined>>,
}

export function useArtemis({
  inTargetingMode,
  setTargetingMode,
  activeAbility,
  setActiveAbility,
  target,
  setTarget,
  resolution,
}:useCharacterProps):Artemis {
  const [currentHealth, setCurrentHealth] = useState(10);
  const [maxHealth, setMaxHealth] = useState(20);
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const oghamsList = useMemo(() => ['Oak', 'Rowan', 'Aspen'], []);
  const abilitiesList = useMemo(() => ['Dark Arrow', 'Gadget Trap'], []);
  const tincturesList = useMemo(() => ['Potion'], []);
  const name = useMemo(() => Characters.Artemis, []);
  const key = useMemo(() => Characters.Artemis, []);
  const isEnemy = useMemo(() => false, []);

  const handleCancel = useCallback(():void => setActiveAbility(undefined), [setActiveAbility]);

  const handleBack = useCallback(():void => setIsOptionsOpen(false), []);

  useEffect(() => {
    if (resolution) {
      if (resolution.name === Characters.Artemis) {
        setCurrentHealth(resolution.currentHealth);
      }
    }
  }, [resolution]);

  const handleActionButton: CombatActionClick = useCallback((e, state) => {
    setActiveAbility(state);
    setIsOptionsOpen(false);
  }, [setActiveAbility]);

  const onCardSelect: CardSelect = useCallback((e, state) => {
    setIsOptionsOpen(true);
  }, []);

  const onTargetSelect: CardSelect = useCallback((e, state) => {
    setTarget(state);
    setIsOptionsOpen(false);
  }, [setTarget]);

  const actionConfigTransform = useCallback((string:string, icon:string):CombatAction => ({
    name: string,
    id: `${Characters.Artemis}${string.replace(/\s/g, '')}`,
    image: `${process.env.PUBLIC_URL}/icons/${icon}.svg`,
    apCost: 1,
    handleClick: handleActionButton,
    identifier: Characters.Artemis,
  }), [handleActionButton]);

  const attackConfig = useMemo(
    () => actionConfigTransform('attack', 'rangedAttack'),
    [actionConfigTransform],
  );

  const oghams = useMemo(() => oghamsList.map<CombatAction>(
    (o:string) => actionConfigTransform(o, 'ogham'),
  ), [actionConfigTransform, oghamsList]);

  const abilities = useMemo(() => abilitiesList.map<CombatAction>(
    (a:string) => actionConfigTransform(a, 'ability'),
  ), [abilitiesList, actionConfigTransform]);

  const tinctures = useMemo(() => tincturesList.map<CombatAction>(
    (t:string) => actionConfigTransform(t, 'tincture'),
  ), [actionConfigTransform, tincturesList]);

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
