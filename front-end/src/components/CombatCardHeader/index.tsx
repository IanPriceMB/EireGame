import React from 'react';
import { Combatant } from '../../GlobalTypes';
import { capitalizeFirstLetter } from '../../utils';
import './index.scss';

export type CombatCardHeaderProps = Pick<Combatant, 'name'|'maxHealth'|'currentHealth'>

export const CombatCardHeader:React.FC<CombatCardHeaderProps> = ({
  name,
  maxHealth,
  currentHealth,
}):JSX.Element => (
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
