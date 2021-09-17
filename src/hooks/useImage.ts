import { useQuery } from "react-query";
import { getImage } from "../apiClient";

export function useImage(key: string) {
  return useQuery(key, getImage, {
    refetchOnWindowFocus: false,
  })
}