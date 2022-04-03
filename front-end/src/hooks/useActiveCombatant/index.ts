import React from 'react';
import {
  TBattler, TCharacter, TEnemy, TItem,
} from '../../GlobalTypes';

export type TUseActiveCombatant = {
  active: TBattler
  setAllies: React.Dispatch<React.SetStateAction<TCharacter[]>>,
  setEnemies: React.Dispatch<React.SetStateAction<TEnemy[]>>,
}

export type TAttack = {
  target: TEnemy
}

export type TUseItem = {
  item: TItem
}

export const useActiveCombatant = ({
  active,
  setAllies,
  setEnemies,
}:TUseActiveCombatant) => {
  const attack = ({ target }:TAttack) => null;

  const defend = () => setAllies((state:TCharacter[]) => {
    console.log('state', state);
    console.log('active', active);
    const index = state.findIndex((character) => character.name === active.name);
    console.log('index', index);
    const char = state.find((character) => character.name === active.name);

    if (!char) return state;

    const newChar = { ...char, healthValue: char.healthValue + 1 };

    console.log('new char', newChar);

    const newState = state.splice(index, 1, newChar);

    console.log('newState', newState);

    return newState;
  });

  const useItem = () => null;

  // const sheidlAlly = ({ item }:TUseItem) => null;

  // const castSpell = ({ target }:TAttack) => null;

  const battleMenuOptionsConfig = {
    attack: {
      onClick: attack,
    },
    defend: {
      onClick: defend,
    },
    item: {
      onClick: useItem,
    },
  };

  return { battleMenuOptionsConfig };
};
