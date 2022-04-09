import React from 'react';
import { Outlet } from 'react-router-dom';
import './index.scss';

export function SettingsMenu(): JSX.Element {
  return (
    <div className="settings-menu">
      <ul className="settings-menu__options">
        <Outlet />
      </ul>
    </div>
  );
}
