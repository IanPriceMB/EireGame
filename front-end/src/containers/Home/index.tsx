import React from 'react';
import {
  Outlet, Routes, Route,
} from 'react-router-dom';
import { BattleSettingsMenuOptions, SettingsMenu } from '../../components';

export function Home() {
  return (
    <div className="home">
      <Routes>
        <Route path="/" element={<SettingsMenu />}>
          <Route path="battle" element={<BattleSettingsMenuOptions />} />
          {/* <Route path="cutscene" element={<CutseneSettingsMenuOptions />} /> */}
        </Route>
      </Routes>
      <Outlet />
    </div>
  );
}
