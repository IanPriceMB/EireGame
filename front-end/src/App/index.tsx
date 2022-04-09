import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { sceneOne } from '../cutscenes/sceneOne';
import './index.scss';
import { Battlefield, Home, Cutscene } from '../containers';

function App(): JSX.Element {
  return (
    <div className="app">
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="cutscene" element={<Cutscene cutsceneData={sceneOne} />} />
            <Route path="battle" element={<Battlefield />} />
          </Route>
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
