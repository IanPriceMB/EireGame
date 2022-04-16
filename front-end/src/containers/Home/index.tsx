import React from 'react';
import {
  Outlet, Routes, Route,
} from 'react-router-dom';
import {
  BattleSettingsMenuOptions,
  HomeSettingsMenuOptions,
  SettingsMenu,
  CutsceneSettingsMenuOptions,
  CitySettingsMenuOptions,
} from '../../components';
import './index.scss';

export function Home(): JSX.Element {
  return (
    <div className="home">
      <Routes>
        <Route path="/" element={<SettingsMenu />}>
          <Route index element={<HomeSettingsMenuOptions />} />
          <Route path="battle" element={<BattleSettingsMenuOptions />} />
          <Route path="cutscene" element={<CutsceneSettingsMenuOptions />} />
          <Route path="city" element={<CitySettingsMenuOptions />} />
        </Route>
      </Routes>
      <Outlet />
    </div>
  );
}
