import React from 'react';
import { CombatButtonProps } from '../CombatButton';
import { CombatCardFooter } from '../CombatCardFooter';
import { CombatCardHeader, CombatCardHeaderProps } from '../CombatCardHeader';
import { StatusBar, StatusBarProps } from '../StatusBar';
import './index.scss';

export type CombatCardProps = StatusBarProps & CombatCardHeaderProps & {
  enchantments?: CombatButtonProps[],
  abilities?: CombatButtonProps[],
  tinctures?: CombatButtonProps[],
  handleAttack: () => void,
  onCardSelect: () => void,
}

export function CombatCard({
  statuses,
  name,
  currentHealth,
  maxHealth,
  enchantments,
  abilities,
  tinctures,
  handleAttack,
  onCardSelect,
}:CombatCardProps): JSX.Element {
  return (
    <div className="combat-card">
      {statuses && <StatusBar statuses={statuses} />}
      <button
        className="combat-card__body"
        data-testid="combat-card__body"
        type="button"
        onClick={onCardSelect}
        id={`${name}CombatCard`}
        name={`${name}CombatCard`}
      >
        <CombatCardHeader name={name} maxHealth={maxHealth} currentHealth={currentHealth} />
        <img
          src={`${process.env.PUBLIC_URL}/images/expressions/${name}/${name}.png`}
          alt={`${name} full art`}
          className="combat-card__full-art"
        />
        <CombatCardFooter
          name={name}
          enchantments={enchantments}
          abilities={abilities}
          tinctures={tinctures}
          handleAttack={handleAttack}
        />
      </button>
    </div>
  );
}

CombatCard.defaultProps = {
  statuses: undefined,
  enchantments: undefined,
  abilities: undefined,
  tinctures: undefined,
};
