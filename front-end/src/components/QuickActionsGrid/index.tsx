import React from 'react';
import { CombatAction } from '../../GlobalTypes';
import { QuickActionRow } from '../QuickActionRow';
import './index.scss';

export type QuickActionsGridProps = {
  oghams?:CombatAction[],
  abilities?:CombatAction[],
  tinctures?:CombatAction[],
}

export const QuickActionsGrid:React.FC<QuickActionsGridProps> = ({
  oghams,
  abilities,
  tinctures,
}):JSX.Element => (
  <div className="quick-action-grid">
    {oghams && <QuickActionRow actions={oghams} />}
    {abilities && <QuickActionRow actions={abilities} />}
    {tinctures && <QuickActionRow actions={tinctures} />}
  </div>
);

QuickActionsGrid.defaultProps = {
  oghams: undefined,
  abilities: undefined,
  tinctures: undefined,
};
