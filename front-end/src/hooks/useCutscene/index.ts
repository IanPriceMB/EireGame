import { useCallback, useState, useMemo } from 'react';
import { useAnimatedText } from '../useAnimatedText';
import { TUseCutsceneProps } from '../../cutscenes/types';

export const useCutscene = ({
  cutsceneData,
}: TUseCutsceneProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [cutscene, setCutscene] = useState(cutsceneData);
  const [hasSceneCompleted, setSceneCompleted] = useState(false);

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
    } else if (hasTextCompleted) {
      setCurrentStep((s) => s + 1);
    } else if (currentStep >= cutscene.dialogue.length) {
      setSceneCompleted(true);
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
