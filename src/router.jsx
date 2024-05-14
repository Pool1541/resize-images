import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from '@/pages/home';
import Resize from '@/pages/resize';
import ImageContextProvider from './contexts/images-context';
import { HelmetProvider } from 'react-helmet-async';
import LabelsContextProvider from './contexts/labels-context';

export default function AppRouter() {
  return (
    <Router>
      <HelmetProvider>
        <ImageContextProvider>
          <LabelsContextProvider>
            <Routes>
              <Route path='*' element={<Home />} />
              <Route path='/resize' element={<Resize />} />
            </Routes>
          </LabelsContextProvider>
        </ImageContextProvider>
      </HelmetProvider>
    </Router>
  );
}
