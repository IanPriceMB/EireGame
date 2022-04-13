import React from 'react';
import { CombatAction } from '../../GlobalTypes';
import {
  CombatButton,
} from '../CombatButton';
import './index.scss';

export const CombatCardFooter:React.FC<CombatAction> = (props):JSX.Element => (
  <footer className="combat-card-footer">
    <CombatButton {...props} />
  </footer>
);

CombatCardFooter.defaultProps = {
  handleClick: undefined,
};
