import {
  useState, useCallback, useMemo, useEffect,
} from 'react';
import {
  Ally,
  CombatantProps,
  CardSelect, CombatAction, CombatActionClick, CharacterData,
} from '../../GlobalTypes';

interface Result extends Ally {
  isPlayerTurn?: boolean
}

export function useCharacter({
  inTargetingMode,
  setActiveAbility,
  setTarget,
  resolution,
  handleKnockout,
  isPlayerTurn,
  data,
}:CombatantProps<CharacterData>):Result {
  const [currentHealth, setCurrentHealth] = useState(data.currentHealth);
  const [maxHealth, setMaxHealth] = useState(data.maxHealth);
  const [statuses, setStatuses] = useState(data.statuses);
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);

  const handleCancel = useCallback(():void => setActiveAbility(undefined), [setActiveAbility]);

  const handleBack = useCallback(():void => setIsOptionsOpen(false), []);

  useEffect(() => {
    if (resolution) {
      if (resolution.identifier === data.identifier) {
        setCurrentHealth(resolution.currentHealth);
      }
    }
  }, [data.identifier, resolution]);

  // get knocked out
  useEffect(() => {
    if (currentHealth <= 0) handleKnockout(data.identifier);
  }, [currentHealth, data.identifier, handleKnockout]);

  const handleActionButton: CombatActionClick = useCallback((e, state) => {
    setActiveAbility(state);
    setIsOptionsOpen(false);
  }, [setActiveAbility]);

  const onCardSelect: CardSelect = useCallback((e, state) => {
    setIsOptionsOpen(true);
  }, []);

  const onTargetSelect: CardSelect = useCallback((e, state) => {
    if (currentHealth >= 0) return;
    setTarget(state);
    setIsOptionsOpen(false);
  }, [currentHealth, setTarget]);

  const actionConfigTransform = useCallback((string:string, icon:string):CombatAction => ({
    name: string,
    id: `${data.identifier}${string.replace(/\s/g, '')}`,
    image: `${process.env.PUBLIC_URL}/icons/${icon}.svg`,
    apCost: 1,
    handleClick: handleActionButton,
    identifier: data.identifier,
  }), [data.identifier, handleActionButton]);

  const attackConfig = useMemo(
    () => actionConfigTransform('attack', data.attackIcon),
    [actionConfigTransform, data.attackIcon],
  );

  const oghams = useMemo(() => data.oghams?.map<CombatAction>(
    (o:string) => actionConfigTransform(o, 'ogham'),
  ), [actionConfigTransform, data.oghams]);

  const abilities = useMemo(() => data.abilities?.map<CombatAction>(
    (a:string) => actionConfigTransform(a, 'ability'),
  ), [actionConfigTransform, data.abilities]);

  const tinctures = useMemo(() => data.tinctures?.map<CombatAction>(
    (t:string) => actionConfigTransform(t, 'tincture'),
  ), [actionConfigTransform, data.tinctures]);

  return {
    statuses,
    name: data.name,
    currentHealth,
    maxHealth,
    oghams,
    abilities,
    tinctures,
    attackConfig,
    identifier: data.identifier,
    onCardSelect: inTargetingMode ? onTargetSelect : onCardSelect,
    isOpen: isOptionsOpen,
    isEnemy: data.isEnemy,
    inTargetingMode,
    handleCancel,
    handleBack,
    fullArtSrc: data.fullArtSrc,
    isPlayerTurn,
  };
}
