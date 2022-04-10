import React, { ComponentProps } from 'react';
import { CombatAction } from '../../GlobalTypes';
import './index.scss';

export interface CombatButtonProps extends
  Omit<ComponentProps<'button'>, 'name'|'id'>, Omit<CombatAction, 'handleClick'> {
    handleClick?: () => void
}

export const CombatButton:React.FC<CombatButtonProps> = ({
  name,
  id,
  handleClick,
  image,
  remainingUses,
  apCost,
  ...rest
}):JSX.Element => {
  const onClick = (e: React.MouseEvent<HTMLButtonElement>):void => {
    e.stopPropagation();
    if (handleClick) handleClick();
  };

  return (
    <div
      className="combat-button"
      data-testid="combat-button"
    >
      <button
        type="button"
        name={name}
        className="combat-button__button"
        data-testid="combat-button__button"
        id={id}
        onClick={onClick}
        disabled={rest.disabled || !handleClick}
        {...rest}
      >
        <img
          src={image}
          alt={`${name}`}
          className="combat-button__image"
          data-testid="combat-button__image"
        />
      </button>
      {remainingUses && (
      <div
        className="combat-button__remaining-uses"
        data-testid="combat-button__remaining-uses"
      >
        {remainingUses}
      </div>
      )}
      {apCost && (
      <div
        className="combat-button__ap-cost"
        data-testid="combat-button__ap-cost"
      >
        {apCost}
      </div>
      )}
    </div>
  );
};

CombatButton.defaultProps = {
  remainingUses: undefined,
  apCost: undefined,
  handleClick: undefined,
};
