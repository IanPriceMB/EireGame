import React from 'react';
import { CombatButton, CombatButtonProps, SizeOptions } from '../CombatButton';
import './index.scss';

export type QuickActionRowProps = {
  actions: CombatButtonProps[]
}

export function QuickActionRow({ actions }:QuickActionRowProps):JSX.Element {
  return (
    <div className="quick-action-row">
      {actions && actions.map((action: CombatButtonProps) => (
        <CombatButton
          {...action}
        />
      ))}
    </div>
  );
}
