import React from 'react';
import { StatusOption } from '../../GlobalTypes';
import './index.scss';

const statusIconMap = {
  poison: '/icons/poison.svg',
} as {[key:string]: string};

export type StatusIconProps = {
  status: StatusOption
}

export const StatusIcon:React.FC<StatusIconProps> = ({ status }):JSX.Element => (
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
