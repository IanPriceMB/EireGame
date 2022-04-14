import React, { forwardRef } from 'react';
import {
  CombatantProps, CharacterData, Characters, StatusOption,
} from '../../GlobalTypes';
import { BattleCharacter } from '../BattleCharacter';

const mordred = {
  statuses: ['poison'] as StatusOption[],
  name: Characters.Mordred,
  identifier: Characters.Mordred,
  currentHealth: 20,
  maxHealth: 20,
  isEnemy: false,
  oghams: ['fire arrow', 'ice arrow', 'dark arrow'],
  abilities: ['ability'],
  tinctures: ['tincture'],
  attackIcon: 'rangedAttack',
  fullArtSrc: `${process.env.PUBLIC_URL}/images/expressions/${Characters.Mordred}/${Characters.Mordred}.png`,
} as CharacterData;

type Props = Omit<CombatantProps<CharacterData>, 'data'>

export const BattleReadyMordred = forwardRef((props:Props, ref:React.Ref<HTMLButtonElement> | undefined):JSX.Element => (
  <BattleCharacter {...props} data={mordred} ref={ref} />
));

BattleReadyMordred.defaultProps = {
  resolution: undefined,
};
