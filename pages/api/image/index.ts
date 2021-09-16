import type { NextApiRequest, NextApiResponse } from 'next'
import { Image } from '../../../modules/image/entities/Image'
import { ImageRepository } from '../../../modules/image/repos/ImageRepository'
import { MemoryImageRepository } from '../../../modules/image/repos/implementations/MemoryImageRepository'

export default async function handler(req: NextApiRequest, res: NextApiResponse<Image>) {
  if(req.method === "GET") {
    const imageRepository: ImageRepository = new MemoryImageRepository()
    const randomImage = await  imageRepository.getRandomImage()
    res.status(200).json(randomImage)
  }
}