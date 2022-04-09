import {
  useCallback, useState, useMemo, useEffect,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { useAnimatedText } from '../useAnimatedText';
import { TUseCutsceneProps } from '../../cutscenes/types';

export const useCutscene = ({
  cutsceneData,
}: TUseCutsceneProps):any => {
  const [currentStep, setCurrentStep] = useState(0);
  const [cutscene, setCutscene] = useState(cutsceneData);
  const [hasSceneCompleted, setSceneCompleted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => (hasSceneCompleted ? navigate(cutsceneData.sceneEndPath) : undefined));

  const textToAnimate = useMemo(
    () => cutscene.dialogue[currentStep].dialogue,
    [cutscene, currentStep],
  );

  const {
    text, hasTextCompleted, skipToFullText,
  } = useAnimatedText({
    textToAnimate,
  });

  const skipCutscene = useCallback(() => {
    setSceneCompleted(true);
  }, []);

  const handleNext = useCallback(() => {
    if (!hasTextCompleted) {
      skipToFullText();
    } else if (currentStep === cutscene.dialogue.length - 1) {
      setSceneCompleted(true);
    } else if (hasTextCompleted) {
      setCurrentStep((s) => s + 1);
    }
  }, [currentStep, cutscene.dialogue.length, hasTextCompleted, skipToFullText]);

  return {
    dialogue: text,
    background: cutscene.background,
    speakerInfo: cutscene.dialogue[currentStep],
    setCurrentStep,
    setCutscene,
    skipCutscene,
    handleNext,
    hasTextCompleted,
    skipToFullText,
    hasSceneCompleted,
    setSceneCompleted,
  };
};
