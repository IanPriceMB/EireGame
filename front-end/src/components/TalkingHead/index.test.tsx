import { TalkingHead } from '.';
import { render, screen } from '@testing-library/react';

describe('Cutscene Text Box tests', () => {
  it('displays text when passed', () => {
    const alt = 'asdf'
    const src = 'http://localhost/images/talkingHeads/ArtemisSad.jpg'
    render(<TalkingHead altFaceText={alt} face={src} />)

    expect(screen.getByTestId('talking-head__image')).toHaveProperty('src', src)
  })
})