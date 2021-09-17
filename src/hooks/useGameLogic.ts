import React from "react"
import { Image } from "../../modules/image/entities/Image"

export function useGameLogic(image: Image) {

  const imageCleanWords = React.useMemo(() => {
    return image.generatedFrom.map(
      word => word.trim().toLowerCase()
    ).filter(word => !!word)
  }, [image.generatedFrom])

  const imageWordSet = React.useMemo(() => {
    return new Set(imageCleanWords)
  }, [imageCleanWords])


  // Change comparison strategy if needed
  const isGuessRight = (guess: String) => {
    const cleanGuess = guess.trim().toLowerCase()
    return imageWordSet.has(cleanGuess)
  }

  return { isGuessRight }
}