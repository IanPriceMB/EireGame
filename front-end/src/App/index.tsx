import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { Cutscene } from '../containers/Cutscene';
import { sceneOne } from '../cutscenes/sceneOne';
import { battleOne } from '../battles/battleOne';
import './index.css';
import { Battlefield } from '../containers';
import { SettingsMenu } from '../components';
import { BattleSettings } from '../components/BattleSettings';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<SettingsMenu />}>
            <Route path="battle" element={<BattleSettings />} />
          </Route>
        </Routes>
        <Routes>
          <Route path="/" element={<Cutscene cutsceneData={sceneOne} />} />
          <Route path="/battle" element={<Battlefield battleData={battleOne} />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
