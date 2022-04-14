import React, { forwardRef, useCallback } from 'react';
import {
  CombatAction, Combatant,
} from '../../GlobalTypes';
import { CombatCardFooter } from '../CombatCardFooter';
import { CombatCardHeader } from '../CombatCardHeader';
import { StatusBar } from '../StatusBar';
import './index.scss';

export interface CombatCardProps extends Omit<Combatant, 'inTargetingMode'> {
  attackConfig?: CombatAction;
}

export const CombatCard = forwardRef(({
  statuses,
  identifier,
  name,
  currentHealth,
  maxHealth,
  onCardSelect,
  attackConfig,
  isEnemy,
  fullArtSrc,
  ...rest
}:CombatCardProps, ref:React.Ref<HTMLButtonElement> | undefined): JSX.Element => {
  const onClick = useCallback((e: React.MouseEvent<HTMLButtonElement>):void => {
    e.preventDefault();

    onCardSelect(e, {
      statuses,
      identifier,
      name,
      currentHealth,
      maxHealth,
      isEnemy,
    });
  }, [currentHealth, isEnemy, identifier, maxHealth, name, onCardSelect, statuses]);

  return (
    <div className={`combat-card ${currentHealth <= 0 ? 'combat-card--knocked-out' : ''}`}>
      {statuses && <StatusBar statuses={statuses} />}
      <button
        className="combat-card__body"
        data-testid="combat-card__body"
        type="button"
        onClick={onClick}
        id={`${identifier}CombatCard`}
        name={`${identifier}CombatCard`}
        ref={ref}
        {...rest}
      >
        <CombatCardHeader name={name} maxHealth={maxHealth} currentHealth={currentHealth} />
        <img
          src={fullArtSrc}
          alt={`${name} full art`}
          className={`combat-card__full-art ${currentHealth <= 0 ? 'combat-card__full-art--knocked-out' : ''}`}
        />
        {(!isEnemy && attackConfig) && <CombatCardFooter {...attackConfig} />}
      </button>
    </div>
  );
});

CombatCard.defaultProps = {
  statuses: undefined,
  attackConfig: undefined,
};
