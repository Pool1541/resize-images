import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const ImageContext = createContext();

export default function ImageContextProvider({ children }) {
  const [images, setImages] = useState(null);
  const navigate = useNavigate();

  function getDefaultWidth(imageFile) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = function () {
        resolve(img.width);
      };
      img.onerror = function () {
        reject(new Error('Error al cargar la imagen'));
      };
      img.src = URL.createObjectURL(imageFile);
    });
  }

  async function load(fileArray) {
    if (fileArray instanceof FileList && fileArray.length > 0) {
      try {
        const result = await Promise.all(
          Array.from(fileArray).map(async (file) => {
            const defaultWidth = await getDefaultWidth(file);
            return {
              file: file,
              width: defaultWidth,
              defaultWidth,
            };
          })
        );

        setImages(result);
        navigate('/resize');
      } catch (error) {
        console.error(error);
      }
    }
  }

  return <ImageContext.Provider value={{ images, load }}>{children}</ImageContext.Provider>;
}
