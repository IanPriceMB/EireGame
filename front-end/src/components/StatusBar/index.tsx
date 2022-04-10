import React from 'react';
import { StatusOption } from '../../GlobalTypes';
import { StatusIcon } from '../StatusIcon';
import './index.scss';

export type StatusBarProps = {
  statuses?: StatusOption[]
}

export const StatusBar:React.FC<StatusBarProps> = ({ statuses }):JSX.Element => (
  <div className="status-bar">
    {statuses && statuses.map((status) => <StatusIcon key={status} status={status} />)}
  </div>
);

StatusBar.defaultProps = {
  statuses: undefined,
};
