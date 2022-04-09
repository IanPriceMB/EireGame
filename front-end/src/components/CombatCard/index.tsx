import React, { useMemo } from 'react';
import { CombatButtonProps } from '../CombatButton';
import { CombatCardFooter, CombatCardFooterProps } from '../CombatCardFooter';
import { CombatCardHeader, CombatCardHeaderProps } from '../CombatCardHeader';
import { StatusBar, StatusBarProps } from '../StatusBar';
import './index.scss';

export type CombatCardProps = StatusBarProps & CombatCardHeaderProps & CombatCardFooterProps & {
  onCardSelect: () => void,
}

export function CombatCard({
  statuses,
  name,
  currentHealth,
  maxHealth,
  handleAttack,
  onCardSelect,
}:CombatCardProps): JSX.Element {
  const fullArtSrc = useMemo(
    () => ((name === 'artemis' || name === 'saoirse')
      ? `${process.env.PUBLIC_URL}/images/expressions/${name}/${name}.png`
      : `${process.env.PUBLIC_URL}/images/enemies/${name}.jpg`),
    [name],
  );

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
          src={fullArtSrc}
          alt={`${name} full art`}
          className="combat-card__full-art"
        />
        <CombatCardFooter
          name={name}
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
