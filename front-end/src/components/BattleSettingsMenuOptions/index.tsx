import React from 'react';
import { Button } from '../Button';

export function BattleSettingsMenuOptions() {
  return (
    <li className="settings-menu__option">
      <Button
        id={`${'asdf'}settings-menu-option-button`}
      >
        exit
      </Button>
    </li>
  );
}