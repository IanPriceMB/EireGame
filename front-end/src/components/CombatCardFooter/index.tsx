import React from 'react';
import { CombatButton, CombatButtonProps } from '../CombatButton';
import { QuickActionRow } from '../QuickActionRow';
import './index.scss';

export type CombatCardFooterProps = {
  name: string,
  handleAttack: () => void,
  enchantments?: CombatButtonProps[],
  abilities?: CombatButtonProps[],
  tinctures?: CombatButtonProps[],
}

export function CombatCardFooter({
  name,
  handleAttack,
  enchantments,
  abilities,
  tinctures,
}:CombatCardFooterProps):JSX.Element {
  return (
    <footer className="quick-action-menu">
      <div className="quick-action-menu__quick-attack">
        <CombatButton
          name="attack"
          id={`${name}AttackButton`}
          onClick={handleAttack}
          image={`${process.env.PUBLIC_URL}/icons/meleeAttack.svg`}
          apCost={1}
        />
      </div>
      <div className="quick-action-menu__quick-action-grid">
        {enchantments && <QuickActionRow actions={enchantments} />}
        {abilities && <QuickActionRow actions={abilities} />}
        {tinctures && <QuickActionRow actions={tinctures} />}
      </div>
    </footer>
  );
}

CombatCardFooter.defaultProps = {
  enchantments: undefined,
  abilities: undefined,
  tinctures: undefined,
};
