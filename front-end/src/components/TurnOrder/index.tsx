import React from 'react';
import { TBattler, TTurnOrder } from '../../GlobalTypes';
import './index.scss';

export type TTurnOrderProps = {
  turnOrder: TTurnOrder
  active: TBattler
}

export function TurnOrder({ turnOrder, active }:TTurnOrderProps) {
  return (
    <aside className="turn-order">
      {turnOrder.map((combatant: TBattler) => (
        <div className={`turn-order__icon ${active.name === combatant.name ? 'active' : ''}`}>
          <img src={combatant.picture} alt={combatant.altPicText} className="turn-order__image" />
        </div>
      ))}
    </aside>
  );
}
