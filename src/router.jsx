import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from '@/pages/home';
import Resize from '@/pages/resize';
import ImageContextProvider from './contexts/images-context';
import { HelmetProvider } from 'react-helmet-async';

export default function AppRouter() {
  return (
    <Router>
      <ImageContextProvider>
        <HelmetProvider>
          <Routes>
            <Route path='*' element={<Home />} />
            <Route path='/resize' element={<Resize />} />
          </Routes>
        </HelmetProvider>
      </ImageContextProvider>
    </Router>
  );
}
