import React, { forwardRef } from 'react';
import {
  CombatantProps, CharacterData, Characters, StatusOption,
} from '../../GlobalTypes';
import { BattleCharacter } from '../BattleCharacter';

const bea = {
  statuses: [] as StatusOption[],
  name: Characters.Bea,
  identifier: Characters.Bea,
  currentHealth: 20,
  maxHealth: 20,
  isEnemy: false,
  oghams: ['metal', 'oak', 'birch'],
  abilities: ['ability', 'ability2'],
  tinctures: ['alchohol', 'potion', 'elixer'],
  attackIcon: 'meleeAttack',
  fullArtSrc: `${process.env.PUBLIC_URL}/images/expressions/${Characters.Bea}/${Characters.Bea}.png`,
} as CharacterData;

type Props = Omit<CombatantProps<CharacterData>, 'data'>

export const BattleReadyBea = forwardRef((props:Props, ref:React.Ref<HTMLButtonElement> | undefined):JSX.Element => (
  <BattleCharacter {...props} data={bea} ref={ref} />
));

BattleReadyBea.defaultProps = {
  resolution: undefined,
};
