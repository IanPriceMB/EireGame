import React, { useState, useEffect } from "react"

export type TUseAnimatedTextProps = {
  textToAnimate: string
  speed?: number
}

export const useAnimatedText = ({ 
  textToAnimate,
  speed = 40,
}: TUseAnimatedTextProps) => {
  const [text, setText] = useState("")
  const [fullText, setFullText] = useState(textToAnimate)
  const [index, setIndex] = useState(0)
  useEffect(() => {
    if (index < fullText.length) {
      setTimeout(() => {
        setText(text + fullText[index])
        setIndex(index + 1)
      }, speed)
    }
  }, [index, fullText])

  return text
}
