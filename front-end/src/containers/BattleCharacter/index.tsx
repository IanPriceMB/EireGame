import React, { Dispatch, SetStateAction } from 'react';
import { CombatCharacter } from '../../components/CombatCharacter';
import { ActiveAbility } from '../../GlobalTypes';
import { useArtemis } from '../../hooks';

type BattleCharacterProps ={
  inTargetingMode: boolean,
  setTargetingMode: Dispatch<SetStateAction<boolean>>,
  activeAbility: ActiveAbility,
  setActiveAbility: Dispatch<SetStateAction<ActiveAbility>>,
}

export const BattleCharacter = ({
  inTargetingMode,
  setTargetingMode,
  activeAbility,
  setActiveAbility,
}:BattleCharacterProps):JSX.Element => {
  const Artemis = useArtemis({
    inTargetingMode,
    setTargetingMode,
    activeAbility,
    setActiveAbility,
  });
  return <CombatCharacter {...Artemis} />;
};
