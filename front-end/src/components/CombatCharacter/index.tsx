import React, { forwardRef } from 'react';
import {
  Ally,
} from '../../GlobalTypes';
import { CombatCard } from '../CombatCard';
import { QuickActionsGrid } from '../QuickActionsGrid';
import './index.scss';

interface CombatCharacterProps extends Ally {
  isPlayerTurn?:boolean;
}

export const CombatCharacter = forwardRef(({
  oghams,
  enchantments,
  tinctures,
  handleBack,
  isOpen,
  inTargetingMode,
  handleCancel,
  isPlayerTurn,
  ...rest
}:CombatCharacterProps, ref:React.Ref<HTMLButtonElement> | undefined):JSX.Element | null => (
  <>
    <CombatCard
      {...rest}
      ref={ref}
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
              enchantments={enchantments}
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
    ) : (inTargetingMode && isPlayerTurn) && (
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
));

CombatCharacter.defaultProps = {
  isOpen: false,
  handleBack: undefined,
  oghams: undefined,
  enchantments: undefined,
  tinctures: undefined,
  isPlayerTurn: undefined,
};
