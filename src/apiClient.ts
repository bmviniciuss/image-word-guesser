import axios from "axios"
import { Image } from "../modules/image/entities/Image";

export function getImage(): Promise<Image> {
  return axios.get('/api/image').then(res => res.data)
}