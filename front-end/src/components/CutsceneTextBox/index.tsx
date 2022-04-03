import React from 'react';
import { Button } from '../Button';
import './index.scss';

export type TCutsceneTextBox = {
  dialogue: string;
  nameplate: string;
  handleNextButton?: () => void
}

export function CutsceneTextBox({
  dialogue,
  nameplate,
  handleNextButton,
}:TCutsceneTextBox) {
  return (
    <div className="cutscene-textbox">
      <div className="cutscene-textbox__name-plate">
        {nameplate}
      </div>
      <div className="cutscene-textbox__textbox">
        {dialogue}
      </div>
      {handleNextButton && (
        <Button
          type="button"
          name="next"
          onClick={handleNextButton}
          className="cutscene-textbox__next-button"
          data-testid="cutscene-textbox__next-button"
        >
          Next
        </Button>
      )}
    </div>
  );
}

CutsceneTextBox.defaultProps = {
  handleNextButton: undefined,
};
