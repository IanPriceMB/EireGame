import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BattlefieldRow } from '../../components/BattlefieldRow';
import { CombatCard } from '../../components/CombatCard';
import { TurnInfo } from '../../components/TurnInfo';
import { Enemy, EnemyData } from '../../GlobalTypes';
import { useCombatSystem } from '../../hooks';
import { BattleEnemy } from '../BattleEnemy';
import { BattleReadyArtemis } from '../BattleReadyArtemis';
import { BattleReadyBea } from '../BattleReadyBea';
import { BattleReadyFang } from '../BattleReadyFang';
import { BattleReadyMordred } from '../BattleReadyMordred';
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
    handleKnockout,
    isBattleOver,
    activeEnemy,
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
            handleKnockout={handleKnockout}
            activeEnemy={activeEnemy}
            data={enemy}
          />
        ))}
      </BattlefieldRow>
      <BattlefieldRow type="ally">
        <BattleReadyArtemis
          inTargetingMode={inTargetingMode}
          setActiveAbility={setActiveAbility}
          setTarget={setTarget}
          resolution={resolution}
          handleKnockout={handleKnockout}
          isPlayerTurn={isPlayerTurn}
          ref={artemisCard}
        />
        <BattleReadyFang
          inTargetingMode={inTargetingMode}
          setActiveAbility={setActiveAbility}
          setTarget={setTarget}
          resolution={resolution}
          handleKnockout={handleKnockout}
          isPlayerTurn={isPlayerTurn}
          ref={fangCard}
        />
        <BattleReadySaoirse
          inTargetingMode={inTargetingMode}
          setActiveAbility={setActiveAbility}
          setTarget={setTarget}
          resolution={resolution}
          handleKnockout={handleKnockout}
          isPlayerTurn={isPlayerTurn}
          ref={saoirseCard}
        />
        <BattleReadyBea
          inTargetingMode={inTargetingMode}
          setActiveAbility={setActiveAbility}
          setTarget={setTarget}
          resolution={resolution}
          handleKnockout={handleKnockout}
          isPlayerTurn={isPlayerTurn}
          ref={beaCard}
        />
        <BattleReadyMordred
          inTargetingMode={inTargetingMode}
          setActiveAbility={setActiveAbility}
          setTarget={setTarget}
          resolution={resolution}
          handleKnockout={handleKnockout}
          isPlayerTurn={isPlayerTurn}
          ref={mordredCard}
        />
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
