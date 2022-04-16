import React from 'react';
import { Outlet } from 'react-router-dom';
import { Cutscene } from '../../components';
import { sceneTwo } from '../../cutscenes/sceneTwo';
import { useCutscene } from '../../hooks';
import './index.scss';

export const City = ():JSX.Element => {
  const {
    dialogue, speakerInfo, handleNext, hasSceneCompleted,
  } = useCutscene({ cutsceneData: sceneTwo });

  return (
    <div className="city">
      <Cutscene
        dialogue={dialogue}
        speakerInfo={speakerInfo}
        handleNext={handleNext}
        hasSceneCompleted={hasSceneCompleted}
      />
      <Outlet context={{ hasSceneCompleted }} />
    </div>
  );
};
