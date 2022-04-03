import { useState, useMemo } from 'react';
import { TBattleData } from '../../battles/types';
import { TItem } from '../../GlobalTypes';
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
    handleAttack,
    handleDefend,
    handleItem,
  } = useBattlers({ battleData });

  const combatants = useMemo(() => [...allies, ...enemies], [allies, enemies]);
  const { turn, turnOrder, active } = useTurnOrder({ combatants });

  return {
    allies,
    enemies,
    terrain: battleData.terrain,
    turn,
    active,
    turnOrder,
    handleAttack,
    handleDefend,
    handleItem,
    items,
  };
};
