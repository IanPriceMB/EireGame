import React from 'react';
import { CombatButton, CombatButtonProps } from '../CombatButton';
import './index.scss';

export type QuickActionRowProps = {
  actions: CombatButtonProps[]
}

export function QuickActionRow({ actions }:QuickActionRowProps):JSX.Element {
  return (
    <div className="quick-action-row">
      {actions && actions.map((action: CombatButtonProps) => (
        <CombatButton
          key={action.id}
          {...action}
        />
      ))}
    </div>
  );
}
