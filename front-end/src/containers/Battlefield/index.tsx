import React from 'react';
import {
  Outlet, Route, Routes, useNavigate,
} from 'react-router-dom';
import { SelectedDetails, SpellOptionsModal, StatusIconOptions } from '../../components';
import { BattlefieldRow } from '../../components/BattlefieldRow';
import { CombatCard } from '../../components/CombatCard';
import { TurnInfo } from '../../components/TurnInfo';
import './index.scss';

export function Battlefield():JSX.Element {
  const navigate = useNavigate();
  const enemies = [{
    name: 'selkie',
    currentHealth: 10,
    maxHealth: 10,
  }];
  const allies = [{
    statuses: ['poison'] as StatusIconOptions[],
    name: 'artemis',
    currentHealth: 20,
    maxHealth: 20,
    enchantments: [{
      name: 'enchantment',
      id: 'artemis-enchantment',
      onClick: () => undefined,
      image: `${process.env.PUBLIC_URL}/icons/enchantment.svg`,
      apCost: 1,
    }],
    abilities: [{
      name: 'ability',
      id: 'artemis-ability',
      onClick: () => undefined,
      image: `${process.env.PUBLIC_URL}/icons/ability.svg`,
      apCost: 1,
    }],
    tinctures: [{
      name: 'tincture',
      id: 'artemis-tincture',
      onClick: () => undefined,
      image: `${process.env.PUBLIC_URL}/icons/tincture.svg`,
      remainingUses: 3,
      apCost: 1,
    }],
    handleAttack: () => navigate('/battle/active'),
  }];
  const turn = 1;
  const remainingAP = 10;
  const activeData = allies[0];
  const selectedData = {
    name: 'selkie',
    currentHealth: 10,
    maxHealth: 10,
  };
  const terrain = `${process.env.PUBLIC_URL}/images/backgrounds/deepWater.jpg`;
  const handleEnemyCardSelect = ():void => undefined;
  const handleAllyCardSelect = ():undefined => undefined;

  return (
    <div className="battlefield">
      <BattlefieldRow type="enemy">
        {enemies && enemies.map((enemy) => (
          <CombatCard
            name={enemy.name}
            currentHealth={enemy.currentHealth}
            maxHealth={enemy.maxHealth}
            onCardSelect={handleEnemyCardSelect}
          />
        ))}
      </BattlefieldRow>
      <BattlefieldRow type="ally">
        {allies && allies.map((ally) => (
          <CombatCard
            statuses={ally.statuses}
            name={ally.name}
            currentHealth={ally.currentHealth}
            maxHealth={ally.maxHealth}
            handleAttack={ally.handleAttack}
            onCardSelect={handleAllyCardSelect}
          />
        ))}
      </BattlefieldRow>
      <TurnInfo remainingAP={remainingAP} turn={turn} />
      <SelectedDetails
        {...selectedData}
      />
      <img
        src={`${process.env.PUBLIC_URL}${terrain}`}
        alt="background terrain"
        className="battlefield__terrain"
      />
      {/* <Outlet /> */}
      <Routes>
        <Route path="/battle">
          <Route
            path="active"
            element={<SpellOptionsModal {...activeData} onCardSelect={() => null} />}
          />
        </Route>
      </Routes>
    </div>
  );
}
