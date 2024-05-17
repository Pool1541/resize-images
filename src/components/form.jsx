import useImages from '@/hooks/useImages';
import { Button } from '@material-tailwind/react/components/Button';
import { useRef } from 'react';

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
    <div className='w-full max-w-[400px] bg-primary px-10 flex flex-col'>
      <input
        type='file'
        className='hidden'
        name='images'
        multiple
        accept='image/jpg,image/png,image/jpeg'
        ref={inputFileRef}
        onChange={handleChange}
      />
      <Button type='button' className='bg-[#ec111a]' onClick={handleClick}>
        Cargar imágenes
      </Button>
    </div>
  );
}
