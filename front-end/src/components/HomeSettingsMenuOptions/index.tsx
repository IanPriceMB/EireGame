import React from 'react';

export function HomeSettingsMenuOptions(): JSX.Element {
  return (
    <li className="settings-menu__option" key="settings-menu-options">
      <button
        type="button"
        id="settings-menu-option-button"
      >
        options
      </button>
    </li>
  );
}
