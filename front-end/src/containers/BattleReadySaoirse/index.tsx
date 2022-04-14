import React, { forwardRef } from 'react';
import {
  CombatantProps, CharacterData, Characters, StatusOption,
} from '../../GlobalTypes';
import { BattleCharacter } from '../BattleCharacter';

const saoirse = {
  statuses: [] as StatusOption[],
  name: Characters.Saoirse,
  identifier: Characters.Saoirse,
  currentHealth: 20,
  maxHealth: 20,
  isEnemy: false,
  oghams: ['fire arrow'],
  abilities: ['ability', 'ability2'],
  tinctures: [],
  attackIcon: 'meleeAttack',
  fullArtSrc: `${process.env.PUBLIC_URL}/images/expressions/${Characters.Saoirse}/${Characters.Saoirse}.png`,
} as CharacterData;

type Props = Omit<CombatantProps<CharacterData>, 'data'>

export const BattleReadySaoirse = forwardRef((props:Props, ref: React.Ref<HTMLButtonElement> | undefined):JSX.Element => (
  <BattleCharacter {...props} data={saoirse} ref={ref} />
));

BattleReadySaoirse.defaultProps = {
  resolution: undefined,
};
