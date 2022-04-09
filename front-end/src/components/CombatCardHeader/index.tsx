import React from 'react';
import { capitalizeFirstLetter } from '../../utils';
import './index.scss';

export type CombatCardHeaderProps = {
  name: string,
  currentHealth: number,
  maxHealth: number,
}

export function CombatCardHeader({
  name,
  maxHealth,
  currentHealth,
}:CombatCardHeaderProps):JSX.Element {
  return (
    <header className="header">
      <h2 className="header__name-plate">{capitalizeFirstLetter(name)}</h2>
      <div className="header__health">
        <div className="header__current-health">{currentHealth}</div>
        <div className="header__max-health">{maxHealth}</div>
        <img
          src={`${process.env.PUBLIC_URL}/icons/heart.svg`}
          alt={`${name} health value`}
          className="header__health-svg"
        />
      </div>
    </header>
  );
}
