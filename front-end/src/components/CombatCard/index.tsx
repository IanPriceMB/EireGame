import React, { ComponentProps, useMemo } from 'react';
import { CombatAction, Combatant } from '../../GlobalTypes';
import { CombatCardFooter } from '../CombatCardFooter';
import { CombatCardHeader } from '../CombatCardHeader';
import { StatusBar } from '../StatusBar';
import './index.scss';

export interface CombatCardProps extends Omit<ComponentProps<'button'>, 'name'|'key'>, Combatant {
    onCardSelect: (
      e: React.MouseEvent<HTMLButtonElement>,
      state: Omit<Combatant, 'attack'>,
    ) => void,
    handleClick?: () => void,
    attack?: CombatAction,
}

export const CombatCard:React.FC<CombatCardProps> = ({
  statuses,
  key,
  name,
  currentHealth,
  maxHealth,
  onCardSelect,
  attack,
  handleClick,
  ...rest
}): JSX.Element => {
  const fullArtSrc = useMemo(
    () => ((name === 'artemis' || name === 'saoirse')
      ? `${process.env.PUBLIC_URL}/images/expressions/${name}/${name}.png`
      : `${process.env.PUBLIC_URL}/images/enemies/${name}.jpg`),
    [name],
  );

  const onClick = (e: React.MouseEvent<HTMLButtonElement>):void => {
    // e.stopPropagation();
    onCardSelect(e, {
      statuses,
      key,
      name,
      currentHealth,
      maxHealth,
    });
  };

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
        {attack && <CombatCardFooter {...attack} handleClick={handleClick} />}
      </button>
    </div>
  );
};

CombatCard.defaultProps = {
  statuses: undefined,
  handleClick: undefined,
  attack: undefined,
};
