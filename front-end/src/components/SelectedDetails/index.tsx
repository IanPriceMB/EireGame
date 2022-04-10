import React from 'react';
import { Combatant } from '../../GlobalTypes';
import './index.scss';

export type SelectedDetailsProps = Pick<Combatant, 'name'|'currentHealth'|'maxHealth'>

export const SelectedDetails:React.FC<SelectedDetailsProps> = ({
  name,
  currentHealth,
  maxHealth,
}):JSX.Element | null => {
  if (!name) return null;
  return (
    <div className="selected-details">
      <div className="selected-details__info">
        Name:
        {' '}
        {name}
      </div>
      <div className="selected-details__info">
        Health:
        {' '}
        {currentHealth}
        /
        {maxHealth}
      </div>
    </div>
  );
};

SelectedDetails.defaultProps = {
  name: undefined,
  currentHealth: undefined,
  maxHealth: undefined,
};
