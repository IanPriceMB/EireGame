import React from 'react';
import { TCharacter, TEnemy } from '../../GlobalTypes';
import './index.scss';

export type TTurnOrderProps = {
  turnOrder: (TCharacter | TEnemy)[]
  active: TCharacter | TEnemy
}

export function TurnOrder({ turnOrder, active }:TTurnOrderProps) {
  return (
    <aside className="turn-order">
      {turnOrder.map((combatant: (TCharacter | TEnemy)) => (
        <div className={`turn-order__icon ${active.name === combatant.name ? 'active' : ''}`}>
          <img src={combatant.picture} alt={combatant.altPicText} className="turn-order__image" />
        </div>
      ))}
    </aside>
  );
}
