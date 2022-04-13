import React from 'react';
import { screen, render } from '@testing-library/react';
import user from '@testing-library/user-event';
import { CombatButton } from '.';
import { Characters } from '../../GlobalTypes';

describe('combat button tests', () => {
  it('exists', () => expect(CombatButton).toBeDefined());

  it('renders everything', () => {
    const onClick = jest.fn();
    render(<CombatButton
      name="Saoirse"
      id="id"
      handleClick={onClick}
      image="/icons/sword-wound.svg"
      remainingUses={5}
      apCost={1}
      identifier={Characters.Saoirse}
    />);

    expect(screen.getByTestId('combat-button')).toBeDefined();
    expect(screen.getByTestId('combat-button__button')).toBeDefined();
    expect(screen.getByTestId('combat-button__image')).toBeDefined();
    expect(screen.getByTestId('combat-button__remaining-uses')).toHaveTextContent('5');
    expect(screen.getByTestId('combat-button__ap-cost')).toHaveTextContent('1');

    user.click((screen.getByTestId('combat-button__button')));

    expect(onClick.mock.calls.length).tobe(2);
  });
});
