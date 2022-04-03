import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { sceneOne } from '../cutscenes/sceneOne';
import { battleOne } from '../battles/battleOne';
import './index.css';
import { Battlefield, Home, Cutscene } from '../containers';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="cutscene" element={<Cutscene cutsceneData={sceneOne} />} />
            <Route path="battle" element={<Battlefield battleData={battleOne} />}>
              <Route path="active" element={<Battlefield battleData={battleOne} />} />
              {/* <Route path="over" element={<BattleOverScreen/>} /> */}
            </Route>
          </Route>
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
