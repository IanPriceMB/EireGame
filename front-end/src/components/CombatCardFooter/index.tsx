import React from 'react';
import {
  CombatButton, CombatButtonState,
} from '../CombatButton';
import './index.scss';

export type CombatCardFooterProps = Omit<CombatButtonState, 'id'> & {
  handleAttack?: (
    e: React.MouseEvent<HTMLButtonElement>,
    state: CombatButtonState
  ) => void
}

export function CombatCardFooter({
  name,
  handleAttack,
  apCost,
  remainingUses,
}:CombatCardFooterProps):JSX.Element {
  return (
    <footer className="combat-card-footer">
      {handleAttack && (
        <CombatButton
          name="attack"
          id={`${name}AttackButton`}
          handleClick={handleAttack}
          image={`${process.env.PUBLIC_URL}/icons/meleeAttack.svg`}
          apCost={apCost}
          remainingUses={remainingUses}
        />
      )}
    </footer>
  );
}

CombatCardFooter.defaultProps = {
  handleAttack: undefined,
};
