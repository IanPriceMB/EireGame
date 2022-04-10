import React from 'react';
import './index.scss';

export type RowType = 'ally' | 'enemy'

export type BattlefieldRowProps = {
  type: RowType,
  children?: JSX.Element | JSX.Element[]
}

export const BattlefieldRow:React.FC<BattlefieldRowProps> = ({
  type,
  children,
}): JSX.Element => (
  <div className={['battlefield-row', `battlefield-row__${type}`].join(' ')}>
    {children}
  </div>
);

BattlefieldRow.defaultProps = {
  children: undefined,
};
