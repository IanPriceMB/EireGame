import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import './index.scss';

export const CityOutskirts = ():JSX.Element => {
  const { hasSceneCompleted } = useOutletContext<{ hasSceneCompleted: boolean }>();
  return (
    <div className="city-outskirts">
      {hasSceneCompleted && (
        <nav className="city-outskirts__nav">
          <Link
            to="/city"
            className="city-outskirts__link"
            id="main"
          >
            City Main
          </Link>
          <Link
            to="druidry"
            className="city-outskirts__link"
            id="druidry"
          >
            Druidry Shop
          </Link>
          <Link
            to="tinctures"
            className="city-outskirts__link"
            id="tinctures"
          >
            Tinctures Consortium
          </Link>
          <Link
            to="/battle"
            className="city-outskirts__link"
            id="field"
          >
            Battle Field
          </Link>
        </nav>
      )}
      <img src={`${process.env.PUBLIC_URL}/images/city/cityOutskirts.png`} alt="city main" />
    </div>
  );
};
