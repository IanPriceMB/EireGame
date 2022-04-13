import React, { useCallback, useMemo } from 'react';
import {
  CardSelect, Characters, CombatAction, Combatant,
} from '../../GlobalTypes';
import { CombatCardFooter } from '../CombatCardFooter';
import { CombatCardHeader } from '../CombatCardHeader';
import { StatusBar } from '../StatusBar';
import './index.scss';

export interface CombatCardProps extends Omit<Combatant, 'attack'> {
  onCardSelect: CardSelect;
  attackConfig?: CombatAction;
}

export const CombatCard = ({
  statuses,
  key,
  name,
  currentHealth,
  maxHealth,
  onCardSelect,
  attackConfig,
  isEnemy,
  ...rest
}:CombatCardProps): JSX.Element => {
  const fullArtSrc = useMemo(
    () => ((name === Characters.Artemis || name === Characters.Saoirse || name === Characters.Fang
      || name === Characters.Bea)
      ? `${process.env.PUBLIC_URL}/images/expressions/${name}/${name}.png`
      : `${process.env.PUBLIC_URL}/images/enemies/${name}.jpg`),
    [name],
  );

  const onClick = useCallback((e: React.MouseEvent<HTMLButtonElement>):void => {
    e.preventDefault();

    onCardSelect(e, {
      statuses,
      key,
      name,
      currentHealth,
      maxHealth,
      isEnemy,
    });
  }, [currentHealth, isEnemy, key, maxHealth, name, onCardSelect, statuses]);

  return (
    <div className="combat-card">
      {statuses && <StatusBar statuses={statuses} />}
      <button
        className="combat-card__body"
        data-testid="combat-card__body"
        type="button"
        onClick={onClick}
        id={`${key}CombatCard`}
        name={`${key}CombatCard`}
        {...rest}
      >
        <CombatCardHeader name={name} maxHealth={maxHealth} currentHealth={currentHealth} />
        <img
          src={fullArtSrc}
          alt={`${name} full art`}
          className="combat-card__full-art"
        />
        {(!isEnemy && attackConfig) && <CombatCardFooter {...attackConfig} />}
      </button>
    </div>
  );
};

CombatCard.defaultProps = {
  statuses: undefined,
  handleAttack: undefined,
  attackConfig: undefined,
};
