import {
  useCallback, useState, useMemo, Dispatch, SetStateAction,
} from 'react';
import { useAnimatedText } from '../useAnimatedText';
import { TCutsceneData, TDialogue, TUseCutsceneProps } from '../../cutscenes/types';

export type CutsceneSchematics = {
  dialogue: string,
  speakerInfo: TDialogue,
  setCurrentStep: Dispatch<SetStateAction<number>>;
  setCutscene: Dispatch<SetStateAction<TCutsceneData>>,
  skipCutscene: () => void,
  handleNext: () => void,
  hasTextCompleted: boolean;
  skipToFullText: () => void;
  hasSceneCompleted: boolean;
  setSceneCompleted: Dispatch<SetStateAction<boolean>>;
}

export const useCutscene = ({
  cutsceneData,
}: TUseCutsceneProps):any => {
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
    } else if (currentStep === cutscene.dialogue.length - 1) {
      setSceneCompleted(true);
    } else if (hasTextCompleted) {
      setCurrentStep((s) => s + 1);
    }
  }, [currentStep, cutscene.dialogue.length, hasTextCompleted, skipToFullText]);

  return {
    dialogue: text,
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
