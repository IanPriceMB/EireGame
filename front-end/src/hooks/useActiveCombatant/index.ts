import React from 'react';
import {
  TBattler, TCharacter, TBattleNPC, TItem,
} from '../../GlobalTypes';

export type TUseActiveCombatant = {
  active: TBattler
  setAllies: React.Dispatch<React.SetStateAction<TCharacter[]>>,
  setEnemies: React.Dispatch<React.SetStateAction<TBattleNPC[]>>,
}

export type TAttack = {
  target: TBattleNPC
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
    const tempArr = [...state];
    const index = state.findIndex((character) => character.name === active.name);
    const char = state.find((character) => character.name === active.name);

    if (!char) return state;

    const newChar = { ...char, healthValue: char.healthValue + 1 };

    tempArr.splice(index, 1, newChar);

    return tempArr;
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
