import ResizeImageForm from '@/components/resize-image-form';
import useImages from '@/hooks/useImages';
import useResize from '@/hooks/useResize';
import { Button } from '@material-tailwind/react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Resize() {
  const { images } = useImages();
  const resize = useResize();
  const navigate = useNavigate();

  function download() {
    resize.download(images);
  }

  useEffect(() => {
    if (!images) {
      return navigate('/');
    }
  }, [navigate, images]);

  const arrayOfImages = Array.from(images || []);

  return (
    <section className='min-h-dvh max-w-7xl flex items-center gap-4 m-auto'>
      <div className='grid grid-cols-3 w-[768px] gap-y-4'>
        {arrayOfImages.map((image, i) => (
          <ResizeImageForm imageFile={image} key={i} />
        ))}
      </div>
      <div className='flex items-center justify-center flex-1'>
        <Button className='w-1/2 bg-blue-gray-800' onClick={download}>
          Descargar
        </Button>
      </div>
    </section>
  );
}