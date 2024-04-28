import useImages from "@/hooks/useImages";
import { Button } from "@material-tailwind/react";
import { useRef } from "react";

export function Form() {
  const inputFileRef = useRef(null);
  const { load } = useImages();

  function handleChange() {
    if (inputFileRef.current) {
      load(inputFileRef.current.files);
    }
  }

  function handleClick() {
    if (inputFileRef.current) {
      inputFileRef.current.click();
    }
  }

  return (
    <div className="w-full max-w-[400px] bg-primary px-10 flex flex-col">
      <input
        type="file"
        className="hidden"
        name="images"
        multiple
        accept="image/*"
        ref={inputFileRef}
        onChange={handleChange}
      />
      <Button type="button" className="bg-[#ec111a]" onClick={handleClick}>
        Cargar imágenes
      </Button>
    </div>
  );
}
