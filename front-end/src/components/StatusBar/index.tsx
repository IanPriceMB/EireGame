import React from 'react';
import { StatusIcon, StatusIconOptions } from '../StatusIcon';
import './index.scss';

export type StatusBarProps = {
  statuses?: StatusIconOptions[]
}

export function StatusBar({ statuses }:StatusBarProps):JSX.Element {
  return (
    <div className="status-bar">
      {statuses && statuses.map((status) => <StatusIcon key={status} status={status} />)}
    </div>
  );
}

StatusBar.defaultProps = {
  statuses: undefined,
};
