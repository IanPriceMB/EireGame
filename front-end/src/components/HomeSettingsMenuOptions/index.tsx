import React from 'react';
import { useNavigate } from 'react-router-dom';

export function HomeSettingsMenuOptions(): JSX.Element {
  const naviagte = useNavigate();
  return (
    <>
      <li className="settings-menu__option" key="settings-menu-options">
        <button
          type="button"
          id={`${'asdf'}settings-menu-option-button`}
        >
          options
        </button>
      </li>
      <li className="settings-menu__option" key="setting-menu-start">
        <button
          type="button"
          id={`${'asdf'}settings-menu-option-button`}
          onClick={() => naviagte('/cutscene')}
        >
          start
        </button>
      </li>
    </>
  );
}
