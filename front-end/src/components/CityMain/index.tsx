import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import './index.scss';

export const CityMain = ():JSX.Element => {
  const { hasSceneCompleted } = useOutletContext<{ hasSceneCompleted: boolean }>();

  return (
    <div className="city-main">
      { hasSceneCompleted && (
        <nav className="city-main__nav">
          <Link
            to="outskirts"
            className="city-main__link"
            id="outskirts"
          >
            Outskirts
          </Link>
          <Link
            to="hobby"
            className="city-main__link"
            id="hobby"
          >
            Hobby Shop
          </Link>
          <Link
            to="weapons"
            className="city-main__link"
            id="weapons"
          >
            Weapons Store
          </Link>
          <Link
            to="witchcraft"
            className="city-main__link"
            id="witchcraft"
          >
            Witchcraft Paraphernalia
          </Link>
          {/* <Link
            to="brothel"
            className="city-main__link"
            id="brothel"
          >
            Brothel
          </Link> */}
          <Link
            to="library"
            className="city-main__link"
            id="library"
          >
            Library
          </Link>
          <Link
            to="pub"
            className="city-main__link"
            id="pub"
          >
            Pub
          </Link>
          <Link
            to="stay-over"
            className="city-main__link"
            id="stayOver"
          >
            Stay Over
          </Link>
        </nav>
      )}
      <img src={`${process.env.PUBLIC_URL}/images/city/cityMain.jpg`} alt="city main" />
    </div>
  );
};
