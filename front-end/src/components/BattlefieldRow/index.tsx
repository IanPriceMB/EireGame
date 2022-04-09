import React from 'react';
import './index.scss';

export type RowType = 'ally' | 'enemy'

export type BattlefieldRowProps = {
  type: RowType,
  children?: JSX.Element | JSX.Element[]
}

export function BattlefieldRow({
  type, children,
}: BattlefieldRowProps): JSX.Element {
  return (
    <div className={['battlefield-row', `battlefield-row__${type}`].join(' ')}>
      {children}
    </div>
  );
}

BattlefieldRow.defaultProps = {
  children: undefined,
};
