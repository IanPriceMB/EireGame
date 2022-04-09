import { useEffect, useState } from 'react';
import { TCharacter, TBattleNPC } from '../../GlobalTypes';

export type TUseTurnOrderProps = {
  combatants: (TCharacter | TBattleNPC)[]
}

export const useTurnOrder = ({ combatants }: TUseTurnOrderProps) => {
  const [turn, setTurn] = useState(1);
  const [turnOrder, setTurnOrder] = useState<(TCharacter | TBattleNPC)[]>([]);

  useEffect(() => {
    // eslint-disable-next-line prefer-spread
    setTurnOrder(Array.apply(null, Array(10)).map(() => combatants).flat(1));
  }, [combatants]);

  return {
    turn, turnOrder, setTurn, setTurnOrder, active: turnOrder[turn - 1],
  };
};
