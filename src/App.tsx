import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginPage } from './components/page/Login/LoginPage';
import { HomePage } from './components/page/Home/HomePage';
import { NotFoundPage } from './components/page/NotFound/NotFoundPage';
import { SinginPage } from './components/page/Singin/SinginPage';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='homePage' element={<HomePage />} />
        <Route path='singinPage' element={<SinginPage />} />
        <Route path='/*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};
