import React from 'react';
import { CombatAction } from '../../GlobalTypes';
import {
  CombatButton,
} from '../CombatButton';
import './index.scss';

export interface CombatCardFooterProps extends Omit<CombatAction, 'handleClick'> {
  handleClick?: () => void
}

export const CombatCardFooter:React.FC<CombatCardFooterProps> = ({
  handleClick,
  ...rest
}):JSX.Element => (
  <footer className="combat-card-footer">
    <CombatButton handleClick={handleClick} {...rest} />
  </footer>
);

CombatCardFooter.defaultProps = {
  handleClick: undefined,
};
