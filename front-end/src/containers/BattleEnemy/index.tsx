import React from 'react';
import { CombatCard } from '../../components/CombatCard';
import { CombatantProps, EnemyData } from '../../GlobalTypes';
import { useEnemy } from '../../hooks';

export const BattleEnemy = (props:CombatantProps<EnemyData>):JSX.Element => {
  const character = useEnemy(props);
  return <CombatCard {...character} />;
};

BattleEnemy.defaultProps = {
  resolution: undefined,
};
