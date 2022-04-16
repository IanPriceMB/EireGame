import React from 'react';
import { CombatButton, CombatButtonProps } from '../CombatButton';
import './index.scss';

type CombatButtonInfoProps = CombatButtonProps & {
  detailedInfo?: string;
}

export const CombatButtonInfo = ({ detailedInfo, ...rest }:CombatButtonInfoProps):JSX.Element => (
  <div className="combat-button-info">
    <div className="combat-button-info__tool-tip">
      <div className="combat-button-info__title">{rest.name}</div>
      <div>
        remaining uses:
        {' '}
        {rest.remainingUses || 'limitless'}
      </div>
      <div>
        ability cost:
        {' '}
        {rest.apCost || 'free'}
      </div>
      <p>{detailedInfo}</p>
    </div>
    <CombatButton {...rest} />
    <div className="combat-button-info__name-plate">{rest.name}</div>
  </div>
);

CombatButtonInfo.defaultProps = {
  detailedInfo: undefined,
};
