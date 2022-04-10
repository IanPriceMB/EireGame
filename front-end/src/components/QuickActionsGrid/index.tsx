import React from 'react';
import { Ally, CombatAction } from '../../GlobalTypes';
import { CombatButtonProps } from '../CombatButton';
import { QuickActionRow } from '../QuickActionRow';
import './index.scss';

export type QuickActionsGridProps = {
  enchantments?:Omit<CombatAction, 'handleClick'>[] & {
    handleClick: () => void
  }[],
  abilities?:Omit<CombatAction, 'handleClick'>[] & {
    handleClick: () => void
  }[],
  tinctures?:Omit<CombatAction, 'handleClick'>[] & {
    handleClick: () => void
  }[],
}

export const QuickActionsGrid:React.FC<QuickActionsGridProps> = ({
  enchantments,
  abilities,
  tinctures,
}):JSX.Element => (
  <div className="quick-action-grid">
    {enchantments && <QuickActionRow actions={enchantments} />}
    {abilities && <QuickActionRow actions={abilities} />}
    {tinctures && <QuickActionRow actions={tinctures} />}
  </div>
);

QuickActionsGrid.defaultProps = {
  enchantments: undefined,
  abilities: undefined,
  tinctures: undefined,
};
