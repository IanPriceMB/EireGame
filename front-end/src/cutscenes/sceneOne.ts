import { TCutsceneData } from './types';

export const sceneOne: TCutsceneData = {
  dialogue: [
    {
      character: 'Artemis',
      dialogue: 'Hello there I\'m Artemis!',
      face: `${process.env.PUBLIC_URL}/images/expressions/artemis/artemisNeutral.png`,
      altFaceText: 'Sad Artemis',
    },
    {
      character: 'Artemis',
      dialogue: 'We\'re going to hunt Selkies with the Merrow huntresses!',
      face: `${process.env.PUBLIC_URL}/images/expressions/artemis/artemis.png`,
      altFaceText: 'Excited Artemis',
    },
  ],
};
