import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import './index.scss';
import {
  Battlefield, Home, City, Shop, Brothel,
} from '../containers';
import { SplashScreen } from '../components/SplashScreen';
import { CityMain, CityOutskirts } from '../components';
import { Library } from '../containers/Library';
import { Pub } from '../containers/Pub';
import { StayOver } from '../containers/StayOver';

function App(): JSX.Element {
  return (
    <div className="app">
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<SplashScreen />} />
            <Route path="battle" element={<Battlefield />} />
            <Route path="city" element={<City />}>
              <Route index element={<CityMain />} />
              <Route path="outskirts">
                <Route index element={<CityOutskirts />} />
                <Route path="tinctures" element={<Shop type="tinctures" />} />
                <Route path="druidry" element={<Shop type="druidry" />} />
              </Route>
              <Route path="hobby" element={<Shop type="item" />} />
              <Route path="weapons" element={<Shop type="weapons" />} />
              <Route path="witchcraft" element={<Shop type="witch" />} />
              <Route path="brothel" element={<Brothel />} />
              {/* <Route path="sports-field" element={<SportsField />} /> */}
              <Route path="library" element={<Library />} />
              <Route path="pub" element={<Pub />} />
              <Route path="stay-over" element={<StayOver />} />
            </Route>
          </Route>
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
