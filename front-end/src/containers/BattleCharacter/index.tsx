import React from 'react';
import { CombatCharacter } from '../../components/CombatCharacter';
import { BattleCharacterProps } from '../../GlobalTypes';
import { useCharacter } from '../../hooks';

export const BattleCharacter = (props:BattleCharacterProps):JSX.Element => {
  const character = useCharacter(props);
  return <CombatCharacter {...character} />;
};

BattleCharacter.defaultProps = {
  resolution: undefined,
};
