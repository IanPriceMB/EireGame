import React from 'react';
import {
  SelectedDetails,
} from '../../components';
import { BattlefieldRow } from '../../components/BattlefieldRow';
import { CombatCard } from '../../components/CombatCard';
import { TurnInfo } from '../../components/TurnInfo';
import { Ally, Enemy } from '../../GlobalTypes';
import { useCombatSystem } from '../../hooks';
import { BattleCharacter } from '../BattleCharacter';
import './index.scss';

export function Battlefield():JSX.Element {
  const {
    terrain,
    remainingAP,
    isPlayerTurn,
    enemies,
    activeAbility,
    setActiveAbility,
    selectedEnemy,
    inTargetingMode,
    setTargetingMode,
  } = useCombatSystem();

  return (
    <div className="battlefield">
      <BattlefieldRow type="enemy">
        {enemies && enemies.map(({ ...rest }:Enemy) => (
          <CombatCard
            {...rest}
            onCardSelect={() => null}
          />
        ))}
      </BattlefieldRow>
      <BattlefieldRow type="ally">
        <BattleCharacter
          inTargetingMode={inTargetingMode}
          setTargetingMode={setTargetingMode}
          activeAbility={activeAbility}
          setActiveAbility={setActiveAbility}
        />
      </BattlefieldRow>
      <TurnInfo remainingAP={remainingAP} isPlayerTurn={isPlayerTurn} />
      {selectedEnemy && <SelectedDetails {...selectedEnemy} />}
      <img
        src={`${process.env.PUBLIC_URL}${terrain}`}
        alt="background terrain"
        className="battlefield__terrain"
      />
    </div>
  );
}
