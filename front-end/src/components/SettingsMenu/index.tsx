import React from 'react';
import { Outlet } from 'react-router-dom';
import './index.scss';

export function SettingsMenu(): JSX.Element {
  return (
    <div className="settings-menu">
      <Outlet />
    </div>
  );
}
