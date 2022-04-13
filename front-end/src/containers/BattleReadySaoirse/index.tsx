import React from 'react';
import {
  BattleCharacterProps, CharacterData, Characters, StatusOption,
} from '../../GlobalTypes';
import { BattleCharacter } from '../BattleCharacter';

const saoirse = {
  statuses: [] as StatusOption[],
  name: Characters.Saoirse,
  key: Characters.Saoirse,
  currentHealth: 20,
  maxHealth: 20,
  isEnemy: false,
  oghams: ['fire arrow'],
  abilities: ['ability', 'ability2'],
  tinctures: [],
  attackIcon: 'meleeAttack',
} as CharacterData;

type Props = Omit<BattleCharacterProps, 'characterData'>

export const BattleReadySaoirse = (props:Props):JSX.Element => (
  <BattleCharacter {...props} characterData={saoirse} />
);

BattleReadySaoirse.defaultProps = {
  resolution: undefined,
};
