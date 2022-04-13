import React from 'react';
import { CombatAction } from '../../GlobalTypes';
import { CombatButton } from '../CombatButton';
import './index.scss';

export type QuickActionRowProps = {
  actions: CombatAction[]
}

export function QuickActionRow({ actions }:QuickActionRowProps):JSX.Element {
  return (
    <div className="quick-action-row">
      {actions && actions.map((action) => {
        console.log(action);
        return (
          <CombatButton
            key={action.id}
            {...action}
          />
        );
      })}
    </div>
  );
}
