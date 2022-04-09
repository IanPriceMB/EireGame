import React from 'react';
import { CombatCard, CombatCardProps } from '../CombatCard';
import { QuickActionsGrid, QuickActionsGridProps } from '../QuickActionsGrid';
import './index.scss';

export type SpellOptionsModalProps = CombatCardProps
  & QuickActionsGridProps & {
    handleBack?: () => void,
    isOpen?: boolean
  }

export function SpellOptionsModal({
  statuses,
  name,
  currentHealth,
  maxHealth,
  handleAttack,
  apCost,
  remainingUses,
  onCardSelect,
  enchantments,
  abilities,
  tinctures,
  handleBack,
  isOpen,
}:SpellOptionsModalProps):JSX.Element | null {
  if (!isOpen) return null;
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
          apCost={apCost}
          remainingUses={remainingUses}
        />
        <div className="spell-options-modal__quick-actions">
          <h1 className="spell-options-modal__quick-title">Quick Actions</h1>
          <QuickActionsGrid
            enchantments={enchantments}
            abilities={abilities}
            tinctures={tinctures}
          />
        </div>
      </div>
      {handleBack && (
        <button
          className="spell-options-modal__back-button"
          id="spell-options-modal__back-button"
          data-testid="spell-options-modal__back-button"
          type="button"
          onClick={handleBack}
        >
          Back
        </button>
      )}
      <div className="spell-options-modal__screen" />
    </div>
  );
}

SpellOptionsModal.defaultProps = {
  isOpen: false,
  handleBack: undefined,
};
