import React from 'react';
import { Ally, CombatAction, Combatant } from '../../GlobalTypes';
import { CombatCard } from '../CombatCard';
import { QuickActionsGrid } from '../QuickActionsGrid';
import './index.scss';

export interface SpellOptionsModalProps extends
  Omit<Ally, 'enchantments'|'abilities'|'tinctures'>, Combatant {
  onCardSelect: () => void,
  enchantments?:Omit<CombatAction, 'handleClick'>[] & {
    handleClick: () => void
  }[],
  abilities?:Omit<CombatAction, 'handleClick'>[] & {
    handleClick: () => void
  }[],
  tinctures?:Omit<CombatAction, 'handleClick'>[] & {
    handleClick: () => void
  }[],
  handleBack?: () => void,
  attack?: CombatAction
}

export const SpellOptionsModal: React.FC<SpellOptionsModalProps> = ({
  statuses,
  name,
  currentHealth,
  maxHealth,
  handleAttack,
  attack,
  onCardSelect,
  enchantments,
  abilities,
  tinctures,
  handleBack,
  isOpen,
  key,
}):JSX.Element | null => {
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
          attack={attack}
          key={key}
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
};

SpellOptionsModal.defaultProps = {
  isOpen: false,
  handleBack: undefined,
  enchantments: undefined,
  abilities: undefined,
  tinctures: undefined,
  attack: undefined,
};
