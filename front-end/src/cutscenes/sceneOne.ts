import { TCutsceneData } from './types';

export const sceneOne: TCutsceneData = {
  dialogue: [
    {
      character: 'Artemis',
      dialogue: 'Hello there I\'m Artemis!',
      face: `${process.env.PUBLIC_URL}/images/talkingHeads/Artemis/artemisNeutral.png`,
      altFaceText: 'Sad Artemis',
    },
    {
      character: 'Artemis',
      dialogue: 'We\'re going to hunt Selkies with the Merrow huntresses!',
      face: `${process.env.PUBLIC_URL}/images/talkingHeads/Artemis/artemisShock.png`,
      altFaceText: 'Excited Artemis',
    },
  ],
  background: {
    image: `${process.env.PUBLIC_URL}/images/backgrounds/deepWater.jpg`,
    altText: 'Deep Water',
  },
  sceneEndPath: '/battle',
};
