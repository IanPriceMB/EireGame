import React from 'react';
import { TEnemy } from '../../GlobalTypes';
import './index.scss';

export type TBattlerProps = Omit<TEnemy, 'enemyFlag'>

export function Battler({
  name,
  picture,
  altPicText,
  atkValue,
  healthValue,
}:TBattlerProps) {
  return (
    <div className="battler">
      <div className="battler__name-plate">
        {name}
      </div>
      <img src={`${process.env.PUBLIC_URL}${picture}`} alt={altPicText} className="battler__face" />
      <div className="battler__vitals">
        <div className="battler__vital-display">
          <img
            src={`${process.env.PUBLIC_URL}/icons/hearts.svg`}
            alt="health icon"
            className="battler__vital-icon"
          />
          <div className="battler__vital-value">{healthValue}</div>
        </div>
        <div className="battler__vital-display">
          <img
            src={`${process.env.PUBLIC_URL}/icons/pistol-gun.svg`}
            alt="attack icon"
            className="battler__vital-icon"
          />
          <div className="battler__vital-value">{atkValue}</div>
        </div>
      </div>
    </div>
  );
}
