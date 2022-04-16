import React from 'react';
import { CombatCard } from '../../components/CombatCard';
import { CombatantProps, EnemyData } from '../../GlobalTypes';
import { useEnemy } from '../../hooks';

export const BattleEnemy = (props:CombatantProps<EnemyData, string>):JSX.Element => {
  const enemy = useEnemy(props);
  return <CombatCard {...enemy} />;
};

BattleEnemy.defaultProps = {
  resolution: undefined,
};
