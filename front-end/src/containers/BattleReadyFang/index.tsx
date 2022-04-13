import React from 'react';
import {
  BattleCharacterProps, CharacterData, Characters, StatusOption,
} from '../../GlobalTypes';
import { BattleCharacter } from '../BattleCharacter';

const fang = {
  statuses: [] as StatusOption[],
  name: Characters.Fang,
  key: Characters.Fang,
  currentHealth: 20,
  maxHealth: 20,
  isEnemy: false,
  oghams: ['metal', 'oak', 'birch'],
  abilities: ['ability', 'ability2'],
  tinctures: ['alchohol', 'potion', 'elixer'],
  attackIcon: 'meleeAttack',
} as CharacterData;

type Props = Omit<BattleCharacterProps, 'characterData'>

export const BattleReadyFang = (props:Props):JSX.Element => (
  <BattleCharacter {...props} characterData={fang} />
);

BattleReadyFang.defaultProps = {
  resolution: undefined,
};
