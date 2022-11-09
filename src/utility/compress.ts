/* eslint-disable react-hooks/rules-of-hooks */
import imageCompression from 'browser-image-compression'

export const compressImage = async (
  imageFile: File,
  maxSizeMB: number = 0.3,
  maxWidthOrHeight: number = 1920,
  useWebWorker: boolean = true
) => {
  // console.log(`originalFile size ${imageFile.size / 1024 / 1024} MB`);
  const options = {
    maxSizeMB: maxSizeMB,
    maxWidthOrHeight: maxWidthOrHeight,
    useWebWorker: useWebWorker,
  }

  try {
    const compressedFile = await imageCompression(imageFile, options)
    // console.log(`compressedFile size ${compressedFile.size / 1024 / 1024} MB`); // true
    return await new File([compressedFile], imageFile.name, {
      type: compressedFile.type,
    })
  } catch (error) {
    throw new Error('Image not compressed!')
  }
}
