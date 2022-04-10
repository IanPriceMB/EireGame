import React from 'react';
import { CombatAction } from '../../GlobalTypes';
import { CombatButton } from '../CombatButton';
import './index.scss';

export type QuickActionRowProps = {
  actions: Omit<CombatAction, 'handleClick'>[] & {
    handleClick: () => void
  }[]
}

export function QuickActionRow({ actions }:QuickActionRowProps):JSX.Element {
  return (
    <div className="quick-action-row">
      {actions && actions.map((action) => (
        <CombatButton
          key={action.id}
          {...action}
        />
      ))}
    </div>
  );
}
