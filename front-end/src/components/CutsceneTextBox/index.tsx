import React from 'react';

export type TCutsceneTextBox = {
  dialogue: string;
}

export const CutsceneTextBox = ({ dialogue }:TCutsceneTextBox) => (
  <div className='cutscene-textbox' data-testid='cutscene-textbox'>
    {dialogue}
  </div>
)