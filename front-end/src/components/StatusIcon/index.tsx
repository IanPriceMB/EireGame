import React from 'react';
import './index.scss';

const statusIconMap = {
  poison: '/icons/poison.svg',
} as { [key: string]: string };

export type StatusIconOptions = 'poison'

export type StatusIconProps = {
  status: StatusIconOptions
}

export function StatusIcon({ status }:StatusIconProps):JSX.Element {
  return (
    <div className="status-icon" data-testid="status-icon">
      <img
        src={statusIconMap[status]}
        alt={status}
        className="status-icon__image"
        data-testid="status-icon__image"
      />
      <div className="status-icon__tool-tip">
        {status}
      </div>
    </div>
  );
}
