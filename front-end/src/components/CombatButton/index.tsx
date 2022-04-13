import React, { ComponentProps, useCallback } from 'react';
import { CombatAction } from '../../GlobalTypes';
import './index.scss';

export interface CombatButtonProps extends
  Omit<ComponentProps<'button'>, 'name'|'id'>, CombatAction {
}

export const CombatButton:React.FC<CombatButtonProps> = ({
  name,
  id,
  handleClick,
  image,
  remainingUses,
  apCost,
  identifier,
  ...rest
}):JSX.Element => {
  const onClick = useCallback((e: React.MouseEvent<HTMLButtonElement>):void => {
    e.stopPropagation();
    handleClick(e, {
      name,
      id,
      remainingUses,
      apCost,
      identifier,
    });
  }, [apCost, handleClick, id, identifier, name, remainingUses]);

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
