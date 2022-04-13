import React from 'react';
import { BattlefieldRow } from '../../components/BattlefieldRow';
import { CombatCard } from '../../components/CombatCard';
import { TurnInfo } from '../../components/TurnInfo';
import { Enemy } from '../../GlobalTypes';
import { useCombatSystem } from '../../hooks';
import { BattleReadyArtemis } from '../BattleReadyArtemis';
import { BattleReadyFang } from '../BattleReadyFang';
import { BattleReadySaoirse } from '../BattleReadySaoirse';
import './index.scss';

export function Battlefield():JSX.Element {
  const {
    terrain,
    remainingAP,
    isPlayerTurn,
    enemies,
    setActiveAbility,
    inTargetingMode,
    setTarget,
    resolution,
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
        <BattleReadyArtemis
          inTargetingMode={inTargetingMode}
          setActiveAbility={setActiveAbility}
          setTarget={setTarget}
          resolution={resolution}
        />
        <BattleReadySaoirse
          inTargetingMode={inTargetingMode}
          setActiveAbility={setActiveAbility}
          setTarget={setTarget}
          resolution={resolution}
        />
        <BattleReadyFang
          inTargetingMode={inTargetingMode}
          setActiveAbility={setActiveAbility}
          setTarget={setTarget}
          resolution={resolution}
        />
      </BattlefieldRow>
      <TurnInfo remainingAP={remainingAP} isPlayerTurn={isPlayerTurn} />
      {/* {selectedEnemy && <SelectedDetails {...selectedEnemy} />} */}
      <img
        src={`${process.env.PUBLIC_URL}${terrain}`}
        alt="background terrain"
        className="battlefield__terrain"
      />
    </div>
  );
}
