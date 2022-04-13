import React from 'react';
import {
  BattleCharacterProps, CharacterData, Characters, StatusOption,
} from '../../GlobalTypes';
import { BattleCharacter } from '../BattleCharacter';

const artemis = {
  statuses: ['poison'] as StatusOption[],
  name: Characters.Artemis,
  key: Characters.Artemis,
  currentHealth: 20,
  maxHealth: 20,
  isEnemy: false,
  oghams: ['fire arrow', 'ice arrow', 'dark arrow'],
  abilities: ['ability'],
  tinctures: ['tincture'],
  attackIcon: 'rangedAttack',
} as CharacterData;

type Props = Omit<BattleCharacterProps, 'characterData'>

export const BattleReadyArtemis = (props:Props):JSX.Element => (
  <BattleCharacter {...props} characterData={artemis} />
);

BattleReadyArtemis.defaultProps = {
  resolution: undefined,
};
