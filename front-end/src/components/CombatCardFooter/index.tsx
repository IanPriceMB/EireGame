import React from 'react';
import { CombatButton } from '../CombatButton';
import './index.scss';

export type CombatCardFooterProps = {
  name: string,
  handleAttack?: () => void,
}

export function CombatCardFooter({
  name,
  handleAttack,
}:CombatCardFooterProps):JSX.Element {
  return (
    <footer className="combat-card-footer">
      {handleAttack && (
        <CombatButton
          name="attack"
          id={`${name}AttackButton`}
          onClick={handleAttack}
          image={`${process.env.PUBLIC_URL}/icons/meleeAttack.svg`}
          apCost={1}
        />
      )}
    </footer>
  );
}

CombatCardFooter.defaultProps = {
  handleAttack: undefined,
};
