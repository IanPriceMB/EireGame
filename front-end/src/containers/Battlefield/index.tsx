/* eslint-disable no-nested-ternary */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BattlefieldRow } from '../../components/BattlefieldRow';
import { TurnInfo } from '../../components/TurnInfo';
import { Characters, EnemyData } from '../../GlobalTypes';
import { useCombatSystem } from '../../hooks';
import { BattleCharacter } from '../BattleCharacter';
import { BattleEnemy } from '../BattleEnemy';
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
    handleAllyKnockout,
    handleEnemyKnockout,
    isBattleOver,
    activeEnemy,
    allies,
    artemisCard,
    fangCard,
    saoirseCard,
    mordredCard,
    beaCard,
  } = useCombatSystem();
  const navigate = useNavigate();

  const handleBattleOver = ():void => navigate('/');
  return (
    <div className="battlefield">
      {isBattleOver && (
      <div style={{
        position: 'fixed', zIndex: 10, height: '100px', width: '300px',
      }}
      >
        {isBattleOver}
        <button type="button" onClick={handleBattleOver}>next</button>
      </div>
      )}
      <BattlefieldRow type="enemy">
        {enemies && enemies.map((enemy:EnemyData) => (
          <BattleEnemy
            inTargetingMode={inTargetingMode}
            setActiveAbility={setActiveAbility}
            setTarget={setTarget}
            resolution={resolution}
            handleKnockout={handleEnemyKnockout}
            activeEnemy={activeEnemy}
            data={enemy}
          />
        ))}
      </BattlefieldRow>
      <BattlefieldRow type="ally">
        {allies.map((ally) => (
          <BattleCharacter
            character={ally}
            inTargetingMode={inTargetingMode}
            setActiveAbility={setActiveAbility}
            setTarget={setTarget}
            resolution={resolution}
            handleKnockout={handleAllyKnockout}
            isPlayerTurn={isPlayerTurn}
            ref={
              ally === Characters.Artemis ? artemisCard
                : ally === Characters.Bea ? beaCard
                  : ally === Characters.Fang ? fangCard
                    : ally === Characters.Saoirse ? saoirseCard
                      : ally === Characters.Mordred ? mordredCard
                        : null
            }
          />
        ))}

      </BattlefieldRow>
      <TurnInfo remainingAP={remainingAP} isPlayerTurn={isPlayerTurn} />
      <img
        src={`${process.env.PUBLIC_URL}${terrain}`}
        alt="background terrain"
        className="battlefield__terrain"
      />
    </div>
  );
}
