import React from 'react';
import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import { CutsceneTextBox } from '.';

describe('Cutscene Text Box tests', () => {
  it('displays text when passed', () => {
    const text = 'asdf';
    const nameplate = 'grania';

    render(<CutsceneTextBox dialogue={text} nameplate={nameplate} />);

    expect(screen.getByText(text)).toBeDefined();
    expect(screen.getByText(nameplate)).toBeDefined();
  });

  it('shows and handles next click', () => {
    const text = 'asdf';
    const nameplate = 'grania';
    const handleNextButton = jest.fn();

    render(<CutsceneTextBox
      dialogue={text}
      nameplate={nameplate}
      handleNextButton={handleNextButton}
    />);

    const button = screen.getByTestId('cutscene-textbox__next-button');
    expect(button).toBeDefined();

    user.click(button);

    expect(handleNextButton.mock.calls.length).toBe(1);
  });
});
