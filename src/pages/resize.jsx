import Rename from '@/components/rename';
import ResizeImageForm from '@/components/resize-image-form';
import useImages from '@/hooks/useImages';
import useLabels from '@/hooks/useLabels';
import useResize from '@/hooks/useResize';
import { Button } from '@material-tailwind/react';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';

export default function Resize() {
  const [isPending, setIsPending] = useState(false);
  const [label, setLabel] = useState('');
  const { saveLabel } = useLabels();
  const { images } = useImages();
  const resize = useResize();
  const navigate = useNavigate();

  function handleChange(e) {
    if (!e.target) {
      setLabel(e);
    } else {
      setLabel(e.target.value);
    }
  }

  async function download() {
    try {
      setIsPending(true);
      const resizedImages = await Promise.all(
        images.map(async ({ file, width }) => {
          return await resize.resize(file, width);
        })
      );

      resize.download(resizedImages, label);
      saveLabel(label);
    } catch (error) {
      console.log(error);
    } finally {
      setIsPending(false);
      handleChange('');
    }
  }

  useEffect(() => {
    if (!images) {
      return navigate('/');
    }
  }, [navigate, images]);

  const arrayOfImages = Array.from(images || []);

  return (
    <>
      <Helmet>
        <title>Resize images | Download</title>
      </Helmet>
      <section className='min-h-dvh max-w-7xl flex items-center gap-4 m-auto'>
        <div className='grid grid-cols-3 w-[768px] gap-y-4'>
          {arrayOfImages.map((image, i) => (
            <ResizeImageForm imageFile={image} key={i} />
          ))}
        </div>

        <div className='flex flex-col items-center justify-center flex-1'>
          <Rename label={label} changeLabel={handleChange} />
          <Button className='w-1/2 bg-blue-gray-800' onClick={download} disabled={isPending}>
            Descargar
          </Button>
        </div>
      </section>
    </>
  );
}
