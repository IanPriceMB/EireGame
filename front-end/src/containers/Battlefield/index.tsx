import React, { useState, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  SelectedDetails,
  SpellOptionsModal,
} from '../../components';
import { BattlefieldRow } from '../../components/BattlefieldRow';
import { CombatCard } from '../../components/CombatCard';
import { TurnInfo } from '../../components/TurnInfo';
import {
  Ally, CombatAction, Combatant, Enemy, StatusOption,
} from '../../GlobalTypes';
import { randomZeroToXWhole } from '../../utils';
import './index.scss';

const enemiesData = [{
  name: 'selkie',
  key: 'selkie1',
  currentHealth: 10,
  maxHealth: 10,
  attack: {
    apCost: 2,
    damage: 1,
    handleClick: (cb) => cb('selkie1'),
    id: 'artemisAttack',
    name: 'attack',
    image: `${process.env.PUBLIC_URL}/icons/meleeAttack.svg`,
  },
}] as Enemy[];
const alliesData = [{
  statuses: ['poison'] as StatusOption[],
  name: 'artemis',
  key: 'artemis',
  currentHealth: 20,
  maxHealth: 20,
  enchantments: [{
    name: 'enchantment',
    id: 'artemis-enchantment',
    handleClick: () => undefined,
    image: `${process.env.PUBLIC_URL}/icons/enchantment.svg`,
    apCost: 1,
  }],
  abilities: [{
    name: 'ability',
    id: 'artemis-ability',
    handleClick: () => undefined,
    image: `${process.env.PUBLIC_URL}/icons/ability.svg`,
    apCost: 1,
  }],
  tinctures: [{
    name: 'tincture',
    id: 'artemis-tincture',
    handleClick: () => undefined,
    image: `${process.env.PUBLIC_URL}/icons/tincture.svg`,
    remainingUses: 3,
    apCost: 1,
  }],
  attack: {
    apCost: 1,
    damage: 2,
    handleClick: (cb) => cb('artemis'),
    id: 'artemisAttack',
    name: 'attack',
    image: `${process.env.PUBLIC_URL}/icons/meleeAttack.svg`,
  },
}] as Ally[];
export function Battlefield():JSX.Element {
  const navigate = useNavigate();
  const terrain = `${process.env.PUBLIC_URL}/images/backgrounds/deepWater.jpg`;
  const [isBattleOptionsOpen, setBattleOptionsOpen] = useState(false);
  const [active, setActive] = useState<Ally|Enemy>();
  const [selected, setSelected] = useState<Enemy>();
  const [inTargetingMode, setTargetingMode] = useState(false);
  const [activeSkill, setActiveSkill] = useState<string|undefined>();
  const [isPlayerTurn, setPlayerTurn] = useState(false);
  const [remainingAP, setRemainingAP] = useState(10);
  const [enemies, setEnemies] = useState<Enemy[]>(enemiesData);
  const [allies, setAllies] = useState<Ally[]>(alliesData);

  const handleAttack = useCallback((who:string):void => {
    if (isPlayerTurn) {
      const ally = allies.find((a) => a.key === who);
      setActive(ally);
    } else if (!isPlayerTurn) {
      const enemy = enemies.find((en) => en.key === who);
      setActive(enemy);
    }
    setTargetingMode(true);
    setBattleOptionsOpen(false);
    setActiveSkill('attack');
  }, [allies, enemies, isPlayerTurn]);

  const handleTargetSelect = useCallback((
    e?: React.MouseEvent<HTMLButtonElement>,
    state?: Omit<Combatant, 'attack'>,
  ):void => {
    if (!activeSkill || !active) return;
    const { damage, apCost } = active[activeSkill] as CombatAction;
    if (!damage || !apCost) return;
    if (isPlayerTurn && state) {
      const enemy = enemies.find((en) => en.name === state.name);
      if (!enemy) return;
      enemy.currentHealth -= damage;
      setEnemies([enemy]);
    } else if (!isPlayerTurn) {
      const ally = allies[randomZeroToXWhole(allies.length - 1)];
      if (!ally) return;
      ally.currentHealth -= damage;
      setAllies([ally]);
    }
    setTargetingMode(false);
    setRemainingAP((ap) => ap - apCost);
    setActiveSkill(undefined);
    setActive(undefined);
  }, [active, activeSkill, allies, enemies, isPlayerTurn]);

  // update the isPlayerTurn based on used ap
  useEffect(() => {
    if (remainingAP === 0) {
      setPlayerTurn((t) => !t);
      setRemainingAP(10);
    }
  }, [remainingAP]);

  // if enemy turn set up attack
  useEffect(() => {
    if (!isPlayerTurn) {
      const enemy = enemies[randomZeroToXWhole(enemies.length - 1)];
      enemy.attack?.handleClick(handleAttack);
    }
  }, [enemies, handleAttack, isPlayerTurn]);

  // if enemy turn excecute attack
  useEffect(() => {
    if (!isPlayerTurn) {
      if (activeSkill && active) {
        handleTargetSelect();
      }
    }
  });

  // if you win go to home screen
  useEffect(() => {
    const remainingEnemies = enemies.filter((en) => en.currentHealth > 0);
    if (remainingEnemies.length === 0) {
      navigate('/');
    } else {
      setEnemies(remainingEnemies);
    }
  }, [enemies, navigate]);

  const handleAllyCardSelect = useCallback((
    e: React.MouseEvent<HTMLButtonElement>,
    state: Omit<Combatant, 'attack'>,
  ):void => {
    const ally = allies.find((a) => a.name === state.name);
    setActive(ally);
    setBattleOptionsOpen(true);
  }, [allies]);

  const handleBack = useCallback(():void => setBattleOptionsOpen(false), []);

  const handleEnemyCardSelect = useCallback((
    e: React.MouseEvent<HTMLButtonElement>,
    state: Omit<Combatant, 'attack'>,
  ):void => {
    const enemy = enemies.find((en) => en.name === state.name);
    setSelected(enemy);
  }, [enemies]);

  return (
    <div className="battlefield">
      <BattlefieldRow type="enemy">
        {enemies && enemies.map((enemy) => (
          <CombatCard
            key={enemy.key}
            name={enemy.name}
            currentHealth={enemy.currentHealth}
            maxHealth={enemy.maxHealth}
            onCardSelect={inTargetingMode ? handleTargetSelect : handleEnemyCardSelect}
          />
        ))}
      </BattlefieldRow>
      <BattlefieldRow type="ally">
        {allies && allies.map((ally) => (
          <CombatCard
            key={ally.name}
            statuses={ally.statuses}
            name={ally.name}
            currentHealth={ally.currentHealth}
            maxHealth={ally.maxHealth}
            attack={ally.attack}
            handleAttack={() => ally.attack?.handleClick(handleAttack)}
            onCardSelect={handleAllyCardSelect}
          />
        ))}
      </BattlefieldRow>
      <TurnInfo remainingAP={remainingAP} isPlayerTurn={isPlayerTurn} />
      {selected && <SelectedDetails {...selected} />}
      <img
        src={`${process.env.PUBLIC_URL}${terrain}`}
        alt="background terrain"
        className="battlefield__terrain"
      />
      {active && (
        <SpellOptionsModal
          // {...active}
          attack={active.attack}
          handleAttack={() => active.attack?.handleClick(handleAttack)}
          onCardSelect={() => null}
          handleBack={isPlayerTurn ? handleBack : undefined}
          isOpen={isBattleOptionsOpen}
          key={active.key}
          name={active.name}
          currentHealth={active.currentHealth}
          maxHealth={active.maxHealth}
        />
      )}
    </div>
  );
}
