import { Spinner } from "@chakra-ui/react"

export function LoadingState() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Spinner size="xl" />
    </div>
  )
}