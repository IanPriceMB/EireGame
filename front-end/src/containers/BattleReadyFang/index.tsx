import React, { forwardRef } from 'react';
import {
  CombatantProps, CharacterData, Characters, StatusOption,
} from '../../GlobalTypes';
import { BattleCharacter } from '../BattleCharacter';

const fang = {
  statuses: [] as StatusOption[],
  name: Characters.Fang,
  identifier: Characters.Fang,
  currentHealth: 20,
  maxHealth: 20,
  isEnemy: false,
  oghams: ['metal', 'oak', 'birch'],
  abilities: ['ability', 'ability2'],
  tinctures: ['alchohol', 'potion', 'elixer'],
  attackIcon: 'meleeAttack',
  fullArtSrc: `${process.env.PUBLIC_URL}/images/expressions/${Characters.Fang}/${Characters.Fang}.png`,
} as CharacterData;

type Props = Omit<CombatantProps<CharacterData>, 'data'>

export const BattleReadyFang = forwardRef((props:Props, ref: React.Ref<HTMLButtonElement> | undefined):JSX.Element => (
  <BattleCharacter {...props} data={fang} ref={ref} />
));

BattleReadyFang.defaultProps = {
  resolution: undefined,
};
