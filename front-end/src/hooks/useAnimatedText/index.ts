import { useState, useEffect, useCallback } from 'react';

export type TUseAnimatedTextProps = {
  textToAnimate: string
  speed?: number
}

export const useAnimatedText = ({
  textToAnimate,
  speed = 40,
}: TUseAnimatedTextProps) => {
  const [text, setText] = useState('');
  const [fullText, setFullText] = useState(textToAnimate);
  const [index, setIndex] = useState(0);
  const [hasTextCompleted, setTextCompleted] = useState(false);

  useEffect(() => {
    if (index < fullText.length && !hasTextCompleted) {
      setTimeout(() => {
        setText(text + fullText[index]);
        setIndex(index + 1);
      }, speed);
    } else if (index >= fullText.length) {
      setTextCompleted(true);
      setIndex(0);
    }
  }, [index, fullText, speed, text, hasTextCompleted]);

  useEffect(() => {
    setText('');
    setFullText(textToAnimate);
    setTextCompleted(false);
  }, [textToAnimate]);

  const skipToFullText = useCallback(() => {
    setIndex(fullText.length);
    setText(fullText);
    setTextCompleted(true);
  }, [fullText]);

  return {
    text, skipToFullText, hasTextCompleted,
  };
};
