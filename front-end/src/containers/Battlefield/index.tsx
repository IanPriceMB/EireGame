import React from 'react';
import { TBattleData } from '../../battles/types';
import { BattleMenu, Battler } from '../../components';
import { BattlefieldRow } from '../../components/BattlefieldRow';
import { TurnOrder } from '../../components/TurnOrder';
import { useBattleSystem } from '../../hooks/useBattleSystem';
import './index.scss';

export type TBattlefieldProps = {
  battleData: TBattleData
}

export function Battlefield({ battleData }:TBattlefieldProps) {
  const {
    allies,
    enemies,
    terrain,
    items,
    active,
    turnOrder,
    battleMenuOptionsConfig,
  } = useBattleSystem({ battleData });

  return (
    <div className="battlefield">
      <BattlefieldRow type="enemy">
        {enemies && enemies.map((enemy) => (
          <Battler
            name={enemy.name}
            picture={enemy.picture}
            altPicText={enemy.altPicText}
            atkValue={enemy.atkValue}
            healthValue={enemy.healthValue}
          />
        ))}
      </BattlefieldRow>
      <BattlefieldRow type="ally">
        {allies && allies.map((enemy) => (
          <Battler
            name={enemy.name}
            picture={enemy.picture}
            altPicText={enemy.altPicText}
            atkValue={enemy.atkValue}
            healthValue={enemy.healthValue}
          />
        ))}
      </BattlefieldRow>
      <TurnOrder turnOrder={turnOrder} active={active} />
      <footer className="battlefield__footer">
        <BattleMenu
          menuConfig={battleMenuOptionsConfig}
          items={items}
          enemies={enemies}
        />
        {/* <DetailedCharacterHUD /> */}
      </footer>
      <img
        src={`${process.env.PUBLIC_URL}${terrain}`}
        alt="background terrain"
        className="battlefield__terrain"
      />
    </div>
  );
}
