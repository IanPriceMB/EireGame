import React from 'react';
import './index.scss';

type TBattlefieldRowProps = {
  type: 'ally' | 'enemy',
  children?: JSX.Element | JSX.Element[]
}

export function BattlefieldRow({
  type, children,
}: TBattlefieldRowProps) {
  return (
    <div className={['battlefield-row', `battlefield-row__${type}`].join(' ')}>
      {children}
    </div>
  );
}

BattlefieldRow.defaultProps = {
  children: undefined,
};
