import React from 'react';
import './index.scss';

export type SelectedDetailsProps = {
  name?: string,
  currentHealth?: number,
  maxHealth?: number,
}

export function SelectedDetails({
  name,
  currentHealth,
  maxHealth,
}:SelectedDetailsProps):JSX.Element | null {
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
}

SelectedDetails.defaultProps = {
  name: undefined,
  currentHealth: undefined,
  maxHealth: undefined,
};
