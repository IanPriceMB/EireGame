import React, { forwardRef } from 'react';
import { CombatCharacter } from '../../components/CombatCharacter';
import { CharacterData, CombatantProps } from '../../GlobalTypes';
import { useCharacter } from '../../hooks';

export const BattleCharacter = forwardRef((
  props:CombatantProps<CharacterData>,
  ref:React.Ref<HTMLButtonElement> | undefined,
):JSX.Element => {
  const character = useCharacter(props);
  return <CombatCharacter {...character} ref={ref} />;
});

BattleCharacter.defaultProps = {
  resolution: undefined,
};
