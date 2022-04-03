import { useState, useMemo } from 'react';
import { TBattleData } from '../../battles/types';
import { TItem } from '../../GlobalTypes';
import { useActiveCombatant } from '../useActiveCombatant';
import { useBattlers } from '../useBattlers';
import { useTurnOrder } from '../useTurnOrder';

export type TUseBattleSystemProps = {
  battleData: TBattleData,
};

export const useBattleSystem = ({ battleData }:TUseBattleSystemProps) => {
  const [items, setItems] = useState<TItem[]>([]);

  const {
    allies,
    enemies,
    setAllies,
    setEnemies,
  } = useBattlers({ battleData });

  const combatants = useMemo(() => [...allies, ...enemies], [allies, enemies]);
  const { turn, turnOrder, active } = useTurnOrder({ combatants });

  const {
    battleMenuOptionsConfig,
  } = useActiveCombatant({
    active,
    setAllies,
    setEnemies,
  });

  return {
    allies,
    enemies,
    terrain: battleData.terrain,
    turn,
    active,
    turnOrder,
    items,
    battleMenuOptionsConfig,
  };
};
