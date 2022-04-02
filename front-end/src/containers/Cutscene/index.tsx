import React from 'react';
import { CutsceneTextBox, TalkingHead } from '../../components';
import { useAnimatedText } from '../../hooks/useAnimatedText';

export const Cutscene = () => {
  const sceneData = {
    dialog: [
      {
        character: 'Artemis',
        dialogue: `Hello there I'm Artemis!`,
        face: `${process.env.PUBLIC_URL}/images/talkingHeads/Artemis/artemisSad.jpg`,
        altFaceText: 'Sad Artemis'
      }
    ]
  } 

  const text = useAnimatedText({ textToAnimate: sceneData.dialog[0].dialogue })

  return (
    <div>
      <footer>
        {/* <TalkingHead 
          face={sceneData.dialog[0].face} 
          altFaceText={sceneData.dialog[0].altFaceText}
        /> */}
        <CutsceneTextBox 
          dialogue={text}
        />
      </footer>
    </div>
  )
}
