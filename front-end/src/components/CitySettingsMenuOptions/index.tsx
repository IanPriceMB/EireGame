import React from 'react';
import { useNavigate } from 'react-router-dom';

export function CitySettingsMenuOptions(): JSX.Element {
  const navigate = useNavigate();
  return (
    <button
      type="button"
      id="settings-menu-option-button--exit"
      className="settings-menu__button"
      onClick={() => navigate('/')}
    >
      exit
    </button>
  );
}
