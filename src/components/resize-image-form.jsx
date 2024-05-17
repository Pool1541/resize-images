/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { Input } from '@material-tailwind/react/components/Input';
import ImagePreview from './image-preview';

export default function ResizeImageForm({ imageFile }) {
  const [value, setValue] = useState(imageFile.defaultWidth);

  function handleChange(e) {
    setValue(e.target.value);
  }

  useEffect(() => {
    imageFile.width = Number(value);
  }, [value]);

  return (
    <article className='flex items-center gap-4'>
      <ImagePreview imageFile={imageFile.file} />
      <Input
        type='text'
        label='Width'
        className='flex-1'
        containerProps={{
          style: {
            minWidth: '0px',
          },
        }}
        value={value}
        onChange={handleChange}
      />
    </article>
  );
}
