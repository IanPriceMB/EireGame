import React from 'react';
import { CombatCard, CombatCardProps } from '../CombatCard';
import { QuickActionsGrid, QuickActionsGridProps } from '../QuickActionsGrid';
import './index.scss';

export type SpellOptionsModalProps = CombatCardProps
  & QuickActionsGridProps & Record<string, unknown>

export function SpellOptionsModal({
  statuses,
  name,
  currentHealth,
  maxHealth,
  handleAttack,
  onCardSelect,
  enchantments,
  abilities,
  tinctures,
}:SpellOptionsModalProps):JSX.Element {
  return (
    <div className="spell-options-modal">
      <div className="spell-options-modal__body">
        <CombatCard
          statuses={statuses}
          name={name}
          currentHealth={currentHealth}
          maxHealth={maxHealth}
          handleAttack={handleAttack}
          onCardSelect={onCardSelect}
        />
        <QuickActionsGrid
          enchantments={enchantments}
          abilities={abilities}
          tinctures={tinctures}
        />
      </div>
      <div className="spell-options-modal__screen" />
    </div>
  );
}
