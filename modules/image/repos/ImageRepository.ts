import { Image } from "../entities/Image";

export interface ImageRepository {
  getRandomImage(): Promise<Image>
}