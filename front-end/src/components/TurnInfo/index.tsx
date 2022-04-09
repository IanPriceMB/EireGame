import React from 'react';
import './index.scss';

export type TurnInfoProps = {
  isPlayerTurn: boolean,
  remainingAP: number,
}

export function TurnInfo({ isPlayerTurn, remainingAP }:TurnInfoProps):JSX.Element {
  return (
    <div className="turn-info">
      <h1 className="turn-info__turn">{isPlayerTurn ? 'Your Turn' : 'Enemy Turn'}</h1>
      <div className="turn-info__ap-tracker">
        <h1 className="turn-info__ap-title">
          Remaining AP :
          {' '}
          {remainingAP}
        </h1>
      </div>
    </div>
  );
}
