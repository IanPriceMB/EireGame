import React from 'react';
import { DetailedCombatAction } from '../../GlobalTypes';
import { QuickActionRow } from '../QuickActionRow';
import './index.scss';

export type QuickActionsGridProps = {
  oghams?: DetailedCombatAction[],
  enchantments?: DetailedCombatAction[],
  tinctures?: DetailedCombatAction[],
}

export const QuickActionsGrid:React.FC<QuickActionsGridProps> = ({
  oghams,
  enchantments,
  tinctures,
}):JSX.Element => (
  <div className="quick-action-grid">
    {oghams && <QuickActionRow actions={oghams} />}
    {enchantments && <QuickActionRow actions={enchantments} />}
    {tinctures && <QuickActionRow actions={tinctures} />}
  </div>
);

QuickActionsGrid.defaultProps = {
  oghams: undefined,
  enchantments: undefined,
  tinctures: undefined,
};
