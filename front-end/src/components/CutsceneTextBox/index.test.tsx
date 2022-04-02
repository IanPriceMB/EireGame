import { CutsceneTextBox } from '.';
import { render, screen } from '@testing-library/react';

describe('Cutscene Text Box tests', () => {
  it('displays text when passed', () => {
    const text = 'asdf'
    render(<CutsceneTextBox dialogue={text} />)

    expect(screen.getByText(text)).toBeDefined()
  })
})