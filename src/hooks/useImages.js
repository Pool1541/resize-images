import { ImageContext } from "@/contexts/images-context";
import { useContext } from "react";

export default function useImages() {
  const { images, load } = useContext(ImageContext);

  return { images, load };
}
