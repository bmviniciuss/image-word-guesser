import NextImage from "next/image"
import { useForm } from "react-hook-form";
import React from "react";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button
} from "@chakra-ui/react";

import { Image } from "../../modules/image/entities/Image"
import { useGameLogic } from "../../src/hooks/useGameLogic";

interface Props {
  image: Image
  refetch: () => Promise<void>
}

type FormData = {
  guess: string
}

export function GameForm({ image, refetch }: Props) {
  const [isDebugEnable, setIsDebugEnable] = React.useState(false)
  const [success, setSuccess] = React.useState<undefined | boolean>(undefined)
  const game = useGameLogic(image)
  const form = useForm<FormData>();
  const { errors: formErrors } = form.formState

  const hasTried = React.useMemo(() => success !== undefined, [success])

  function onSubmit(formData: FormData) {
    const result = game.isGuessRight(formData.guess)
    setSuccess(result)
  }

  function resetState() {
    form.reset()
    setSuccess(undefined)
  }

  async function playAgain() {
    resetState()
    await refetch()
  }

  return (
    <>
      <div className="flex flex-col bg-white rounded shadow-lg p-4 px-4">
        <div className="text-gray-700 mb-5">
          <h2 className="text-2xl font-semibold">Guess the words</h2>
        </div>
        <div className="flex flex-col justify-center items-center">
          <NextImage className="rounded" src={image.url} alt="image to be guessed" width={300} height={300} />
        </div>

        <div className="mt-8">

          <div>
            {!hasTried && (
              <form onSubmit={form.handleSubmit(onSubmit)} >

                <FormControl isInvalid={!!formErrors.guess}>
                  <FormLabel htmlFor="guess">Which words generated the image above?</FormLabel>
                  <Input
                    id="guess"
                    placeholder="Make a good guess..."
                    {...form.register("guess", {
                      required: "This field is Required",
                    })}
                  />
                  <FormErrorMessage>
                    {formErrors.guess && formErrors.guess.message}
                  </FormErrorMessage>
                </FormControl>
                <Button isLoading={form.formState.isSubmitting} type="submit" w="100%" className="mt-4">
                  Submit
                </Button>
              </form>
            )}

            {hasTried && success && (
              <div className="flex flex-col justify-center items-center">
                <h3 className="font-bold text-xl text-gray-900 mb-1">Congratulations</h3>
                <p className="text-gray-700 mb-4">You got it right!</p>
                <Button onClick={playAgain} colorScheme="blue">Play Again</Button>
              </div>
            )}

            {hasTried && !success && (
              <div className="flex flex-col justify-center items-center">
                <h3 className="font-bold text-xl text-gray-900 mb-4">Ops! You got it Wrong</h3>
                <Button onClick={resetState} colorScheme="blue">Try Again</Button>
              </div>
            )}
          </div>
        </div>



      </div>
      <div className="mt-2">
        <Button variant="ghost" size="xs" onClick={() => setIsDebugEnable(!isDebugEnable)}>
          {isDebugEnable ? "Disable debug" : "Enable Debug"}
        </Button>
        {isDebugEnable && (
          <div className="text-sm">
            <p>Image id: {image.id}</p>
            <p>Image Words: [ {image.generatedFrom.join(', ')} ]</p>
          </div>
        )}
      </div>

    </>

  )
}