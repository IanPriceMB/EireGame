import {
  useState, useCallback, useEffect,
} from 'react';
import {
  CardSelect, CombatantProps, Enemy, EnemyData,
} from '../../GlobalTypes';

export function useEnemy({
  inTargetingMode,
  setActiveAbility,
  setTarget,
  resolution,
  handleKnockout,
  activeEnemy,
  data,
}:CombatantProps<EnemyData>):Enemy {
  const [currentHealth, setCurrentHealth] = useState(data.currentHealth);
  const [maxHealth, setMaxHealth] = useState(data.maxHealth);
  const [statuses, setStatuses] = useState(data.statuses);

  // if it is enemy turn enemy does things
  useEffect(() => {
    if (activeEnemy === data.identifier) {
      setActiveAbility({
        id: `${data.identifier}${'attack'}`,
        name: 'attack',
        remainingUses: undefined,
        apCost: 1,
        identifier: data.identifier,
      });
    }
  }, [activeEnemy, data.currentHealth, data.identifier, data.isEnemy, data.maxHealth, data.name, data.statuses, setActiveAbility]);

  // handle resolution of combat
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

  const onCardSelect: CardSelect = useCallback((e, state) => null, []);

  const onTargetSelect: CardSelect = useCallback((e, state) => {
    if (currentHealth <= 0) return;
    setTarget(state);
  }, [currentHealth, setTarget]);

  return {
    statuses,
    name: data.name,
    currentHealth,
    maxHealth,
    identifier: data.identifier,
    isEnemy: data.isEnemy,
    onCardSelect: inTargetingMode ? onTargetSelect : onCardSelect,
    inTargetingMode,
    fullArtSrc: data.fullArtSrc,
  };
}
