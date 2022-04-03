import React from 'react';
import { CutsceneTextBox, SettingsMenu, TalkingHead } from '../../components';
import { TCutsceneData } from '../../cutscenes/types';
import { useCutscene } from '../../hooks/useCutscene';
import './index.scss';

type TCutsceneProps = {
  cutsceneData: TCutsceneData
}

export function Cutscene({ cutsceneData }:TCutsceneProps) {
  const {
    dialogue, background, speakerInfo, handleNext,
  } = useCutscene({ cutsceneData });

  return (
    <div
      className="cutscene"
    >
      <header className="cutscene__header">
        <SettingsMenu />
      </header>
      <main className="cutscene__main">
        <div className="cutscene__background">
          <img
            src={background.image}
            alt={background.altText}
            className="cutscene__background--image"
          />
        </div>
      </main>
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
