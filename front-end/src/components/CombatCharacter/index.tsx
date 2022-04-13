import React from 'react';
import {
  Ally, CardSelect, CombatAction, Combatant,
} from '../../GlobalTypes';
import { CombatCard } from '../CombatCard';
import { QuickActionsGrid } from '../QuickActionsGrid';
import './index.scss';

export interface CombatCharacterProps extends Ally {
  onCardSelect: CardSelect,
  handleBack?: () => void,
  isOpen?: boolean;
  attackConfig: CombatAction;
  inTargetingMode: boolean,
  handleCancel: () => void,
}

export const CombatCharacter: React.FC<CombatCharacterProps> = ({
  oghams,
  abilities,
  tinctures,
  handleBack,
  isOpen,
  inTargetingMode,
  handleCancel,
  ...rest
}):JSX.Element | null => (
  <>
    <CombatCard
      {...rest}
    />
    {isOpen ? (
      <div className="combat-character">
        <div className="combat-character__body">
          <CombatCard
            {...rest}
          />
          <div className="combat-character__quick-actions">
            <h1 className="combat-character__quick-title">Quick Actions</h1>
            <QuickActionsGrid
              oghams={oghams}
              abilities={abilities}
              tinctures={tinctures}
            />
          </div>
        </div>
        {handleBack && (
        <button
          className="combat-character__back-button"
          id="combat-character__back-button"
          data-testid="combat-character__back-button"
          type="button"
          onClick={handleBack}
        >
          Back
        </button>
        )}
        <div className="combat-character__screen" />
      </div>
    ) : inTargetingMode && (
      <button
        className="battlefield__cancel-button"
        id="battlefield__cancel-button"
        data-testid="battlefield__cancel-button"
        type="button"
        onClick={handleCancel}
      >
        Cancel
      </button>
    )}
  </>
);

CombatCharacter.defaultProps = {
  isOpen: false,
  handleBack: undefined,
  oghams: undefined,
  abilities: undefined,
  tinctures: undefined,
};
