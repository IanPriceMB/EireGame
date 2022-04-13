import React from 'react';
import {
  BattleCharacterProps, CharacterData, Characters, StatusOption,
} from '../../GlobalTypes';
import { BattleCharacter } from '../BattleCharacter';

const bea = {
  statuses: [] as StatusOption[],
  name: Characters.Bea,
  key: Characters.Bea,
  currentHealth: 20,
  maxHealth: 20,
  isEnemy: false,
  oghams: ['metal', 'oak', 'birch'],
  abilities: ['ability', 'ability2'],
  tinctures: ['alchohol', 'potion', 'elixer'],
  attackIcon: 'meleeAttack',
} as CharacterData;

type Props = Omit<BattleCharacterProps, 'characterData'>

export const BattleReadyBea = (props:Props):JSX.Element => (
  <BattleCharacter {...props} characterData={bea} />
);

BattleReadyBea.defaultProps = {
  resolution: undefined,
};
