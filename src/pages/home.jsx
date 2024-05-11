import { Form } from '@/components/form';
import { Helmet } from 'react-helmet-async';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Resize images</title>
      </Helmet>
      <main className='flex items-center justify-center py-10 h-dvh'>
        <Form />
      </main>
    </>
  );
}
