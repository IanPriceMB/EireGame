import {
  useState, useCallback, useMemo, useEffect,
} from 'react';
import {
  Ally,
  BattleCharacterProps,
  CardSelect, CombatAction, CombatActionClick,
} from '../../GlobalTypes';

export function useCharacter({
  inTargetingMode,
  setActiveAbility,
  setTarget,
  resolution,
  characterData,
}:BattleCharacterProps):Ally {
  const [currentHealth, setCurrentHealth] = useState(characterData.currentHealth);
  const [maxHealth, setMaxHealth] = useState(characterData.maxHealth);
  const [statuses, setStatuses] = useState(characterData.statuses);
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);

  const handleCancel = useCallback(():void => setActiveAbility(undefined), [setActiveAbility]);

  const handleBack = useCallback(():void => setIsOptionsOpen(false), []);

  useEffect(() => {
    if (resolution) {
      if (resolution.key === characterData.key) {
        setCurrentHealth(resolution.currentHealth);
      }
    }
  }, [characterData.key, resolution]);

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
    id: `${characterData.key}${string.replace(/\s/g, '')}`,
    image: `${process.env.PUBLIC_URL}/icons/${icon}.svg`,
    apCost: 1,
    handleClick: handleActionButton,
    identifier: characterData.key,
  }), [characterData.key, handleActionButton]);

  const attackConfig = useMemo(
    () => actionConfigTransform('attack', characterData.attackIcon),
    [actionConfigTransform, characterData.attackIcon],
  );

  const oghams = useMemo(() => characterData.oghams.map<CombatAction>(
    (o:string) => actionConfigTransform(o, 'ogham'),
  ), [actionConfigTransform, characterData.oghams]);

  const abilities = useMemo(() => characterData.abilities.map<CombatAction>(
    (a:string) => actionConfigTransform(a, 'ability'),
  ), [actionConfigTransform, characterData.abilities]);

  const tinctures = useMemo(() => characterData.tinctures.map<CombatAction>(
    (t:string) => actionConfigTransform(t, 'tincture'),
  ), [actionConfigTransform, characterData.tinctures]);

  return {
    statuses,
    name: characterData.name,
    currentHealth,
    maxHealth,
    oghams,
    abilities,
    tinctures,
    attackConfig,
    key: characterData.key,
    onCardSelect: inTargetingMode ? onTargetSelect : onCardSelect,
    isOpen: isOptionsOpen,
    isEnemy: characterData.isEnemy,
    inTargetingMode,
    handleCancel,
    handleBack,
  };
}
