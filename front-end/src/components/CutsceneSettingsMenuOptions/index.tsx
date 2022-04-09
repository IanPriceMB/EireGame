import React from 'react';
import { useNavigate } from 'react-router-dom';

export function CutsceneSettingsMenuOptions(): JSX.Element {
  const navigate = useNavigate();
  return (
    <li className="settings-menu__option">
      <button
        type="button"
        id={`${'asdf'}settings-menu-option-button`}
        onClick={() => navigate('/')}
      >
        exit
      </button>
    </li>
  );
}
