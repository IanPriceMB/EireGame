import React, { forwardRef } from 'react';
import {
  CombatantProps, CharacterData, Characters, StatusOption,
} from '../../GlobalTypes';
import { BattleCharacter } from '../BattleCharacter';

const artemis = {
  statuses: ['poison'] as StatusOption[],
  name: Characters.Artemis,
  identifier: Characters.Artemis,
  currentHealth: 20,
  maxHealth: 20,
  isEnemy: false,
  oghams: ['fire arrow', 'ice arrow', 'dark arrow'],
  abilities: ['ability'],
  tinctures: ['tincture'],
  attackIcon: 'rangedAttack',
  fullArtSrc: `${process.env.PUBLIC_URL}/images/expressions/${Characters.Artemis}/${Characters.Artemis}.png`,
} as CharacterData;

type Props = Omit<CombatantProps<CharacterData>, 'data'>

export const BattleReadyArtemis = forwardRef((props:Props, ref:React.Ref<HTMLButtonElement> | undefined):JSX.Element => (
  <BattleCharacter {...props} data={artemis} ref={ref} />
));

BattleReadyArtemis.defaultProps = {
  resolution: undefined,
};
