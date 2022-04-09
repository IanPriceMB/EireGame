import React from 'react';
import './index.scss';

export type SizeOptions = 'tiny' | 'small' | 'medium' | 'big' | 'large' | 'enormous'

export type CombatButtonProps = {
  name: string
  id: string,
  onClick: () => void,
  image: string,
  remainingUses?: number,
  apCost?: number,
}

export function CombatButton({
  name,
  id,
  onClick,
  image,
  remainingUses,
  apCost,
  ...rest
}: CombatButtonProps):JSX.Element {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>):void => {
    e.stopPropagation();
    onClick();
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
        onClick={(e) => handleClick(e)}
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
};
