import React from 'react';
import { CutsceneSchematics } from '../../hooks';
import { CutsceneTextBox } from '../CutsceneTextBox';
import { TalkingHead } from '../TalkingHead';
import './index.scss';

type CutsceneProps = Pick<CutsceneSchematics,
'hasSceneCompleted'|'speakerInfo'|'dialogue'|'handleNext'>

export function Cutscene({
  hasSceneCompleted, speakerInfo, dialogue, handleNext,
}:CutsceneProps): JSX.Element {
  return (
    <div
      className="cutscene"
      style={{ display: hasSceneCompleted ? 'none' : 'block' }}
    >
      <footer
        className="cutscene__footer"
      >
        <TalkingHead
          face={speakerInfo.face}
          altFaceText={speakerInfo.altFaceText}
        />
        <CutsceneTextBox
          nameplate={speakerInfo.character}
          dialogue={dialogue}
          handleNextButton={handleNext}
        />
      </footer>
    </div>
  );
}
