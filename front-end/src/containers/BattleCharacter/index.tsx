import React, { Dispatch, SetStateAction } from 'react';
import { CombatCharacter } from '../../components/CombatCharacter';
import { ActiveAbility, Combatant } from '../../GlobalTypes';
import { useArtemis } from '../../hooks';

type BattleCharacterProps ={
  inTargetingMode: boolean,
  setTargetingMode: Dispatch<SetStateAction<boolean>>,
  activeAbility?: ActiveAbility,
  setActiveAbility: Dispatch<SetStateAction<ActiveAbility>>,
  target?: Combatant,
  setTarget: Dispatch<SetStateAction<Combatant | undefined>>,
  resolution?: Combatant,
}

export const BattleCharacter = ({
  inTargetingMode,
  setTargetingMode,
  activeAbility,
  setActiveAbility,
  target,
  setTarget,
  resolution,
}:BattleCharacterProps):JSX.Element => {
  const Artemis = useArtemis({
    inTargetingMode,
    setTargetingMode,
    activeAbility,
    setActiveAbility,
    target,
    setTarget,
    resolution,
  });
  return <CombatCharacter {...Artemis} />;
};

BattleCharacter.defaultProps = {
  target: undefined,
  activeAbility: undefined,
  resolution: undefined,
};
