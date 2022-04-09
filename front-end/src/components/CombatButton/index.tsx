import React, { ComponentProps } from 'react';
import './index.scss';

export type SizeOptions = 'tiny' | 'small' | 'medium' | 'big' | 'large' | 'enormous'

export type CombatButtonState = {
  remainingUses?: number,
  apCost?: number,
  name: string,
  id: string
}

export interface CombatButtonExtras extends Omit<ComponentProps<'button'>, 'name'> {
  id: string,
  handleClick?: (
    e: React.MouseEvent<HTMLButtonElement>,
    state: CombatButtonState
  ) => void,
  image: string,
  name: string,
}

export type CombatButtonProps = CombatButtonExtras & CombatButtonState

export function CombatButton({
  name,
  id,
  handleClick,
  image,
  remainingUses,
  apCost,
  ...rest
}: CombatButtonProps):JSX.Element {
  const onClick = (e: React.MouseEvent<HTMLButtonElement>):void => {
    e.stopPropagation();
    if (handleClick) {
      handleClick(e, {
        name,
        remainingUses,
        apCost,
        id,
      });
    }
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
}

CombatButton.defaultProps = {
  remainingUses: undefined,
  apCost: undefined,
  handleClick: undefined,
};
