import React from 'react';
import { DetailedCombatAction } from '../../GlobalTypes';
import { CombatButtonInfo } from '../CombatButtonInfo';
import './index.scss';

export type QuickActionRowProps = {
  actions: Array<DetailedCombatAction>
}

export function QuickActionRow({ actions }:QuickActionRowProps):JSX.Element {
  return (
    <div className="quick-action-row">
      {actions && actions.map((action) => (
        <CombatButtonInfo
          key={action.id}
          {...action}
        />
      ))}
    </div>
  );
}
