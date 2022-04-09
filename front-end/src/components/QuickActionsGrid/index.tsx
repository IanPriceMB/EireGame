import React from 'react';
import { CombatButtonProps } from '../CombatButton';
import { QuickActionRow } from '../QuickActionRow';
import './index.scss';

export type QuickActionsGridProps = {
  enchantments?: CombatButtonProps[],
  abilities?: CombatButtonProps[],
  tinctures?: CombatButtonProps[],
}

export function QuickActionsGrid({
  enchantments,
  abilities,
  tinctures,
}:QuickActionsGridProps):JSX.Element {
  return (
    <div className="quick-action-grid">
      {enchantments && <QuickActionRow actions={enchantments} />}
      {abilities && <QuickActionRow actions={abilities} />}
      {tinctures && <QuickActionRow actions={tinctures} />}
    </div>
  );
}

QuickActionsGrid.defaultProps = {
  enchantments: undefined,
  abilities: undefined,
  tinctures: undefined,
};
