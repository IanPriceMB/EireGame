import React from 'react';
import { useNavigate } from 'react-router-dom';
import './index.scss';

export function SplashScreen(): JSX.Element {
  const navigate = useNavigate();
  return (
    <div className="splash-screen">
      <button
        className="splash-screen__start-button"
        type="button"
        onClick={() => navigate('/cutscene')}
      >
        Start
      </button>
      <img src="" alt="" className="" />
    </div>
  );
}
