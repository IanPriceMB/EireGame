import React from 'react';
import { StatusIconOptions } from '../../components';
import { BattlefieldRow } from '../../components/BattlefieldRow';
import { CombatCard } from '../../components/CombatCard';
import './index.scss';

export function Battlefield():JSX.Element {
  const enemies = [{
    name: 'Selkie',
    currentHealth: 10,
    maxHealth: 10,
    handleAttack: () => undefined,
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
    handleAttack: () => undefined,
    onCardSelect: () => undefined,
  }];
  const turn = 1;
  const ap = 10;
  const selectedData = {};
  const activeData = {};
  const terrain = '';
  const handleEnemyCardSelect = ():void => undefined;

  return (
    <div className="battlefield">
      <header>{turn % 2 === 0 ? 'Your Turn' : 'Enemy Turn'}</header>

      <BattlefieldRow type="enemy">
        {enemies && enemies.map((enemy) => (
          <CombatCard
            name={enemy.name}
            currentHealth={enemy.currentHealth}
            maxHealth={enemy.maxHealth}
            handleAttack={enemy.handleAttack}
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
            enchantments={ally.enchantments}
            abilities={ally.abilities}
            tinctures={ally.tinctures}
            handleAttack={ally.handleAttack}
            onCardSelect={ally.onCardSelect}
          />
        ))}
      </BattlefieldRow>
      <footer className="battlefield__footer">
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
