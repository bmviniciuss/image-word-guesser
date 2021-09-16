import { Image } from "../../entities/Image";
import { ImageRepository } from "../ImageRepository";

export class MemoryImageRepository implements ImageRepository {
  private readonly images: Image[]
  
  constructor() {
    this.images = [
      {
        id: "ee125007-10e5-4486-86ab-0692b68d6c1f",
        url: "https://images.unsplash.com/photo-1523251343397-9225e4cb6319?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80",
        generatedFrom: ['road']
      },
      {
        id: "e7fb55c2-119b-4cfe-80b8-9b24cf140ba7",
        url: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1100&q=80",
        generatedFrom: ["code", "coding"]
      },
      {
        id: "40d257ba-9e8e-45c3-9beb-4c1893501797",
        url: "https://images.unsplash.com/photo-1505864681725-48344595127c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        generatedFrom: ["hand", "sun"]
      }
    ]
  }
  
  async getRandomImage(): Promise<Image> {
    const randomImageIndex = Math.floor(Math.random() * this.images.length)
    return Promise.resolve(this.images[randomImageIndex])
  }
}