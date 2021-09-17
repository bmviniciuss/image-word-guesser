import { useImage } from "../../src/hooks/useImage"
import React from "react";
import { LoadingState } from "./LoadingState";
import { GameForm } from "./GameForm";


export function Game() {
  const image = useImage('image')

  const tryAgain = React.useCallback(async () => {
     await image.refetch()
  }, [image])
  
  if (image.isLoading || image.isFetching) {
    return <LoadingState /> 
  }

  if (image.isSuccess && image.isFetched) {
    return <GameForm image={image.data} refetch={tryAgain} />
  }

  return null
}