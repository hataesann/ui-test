import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginPage } from './components/page/Login/LoginPage';
import { HomePage } from './components/page/Home/HomePage';
import { NotFoundPage } from './components/page/NotFound/NotFoundPage';
import { SinginPage } from './components/page/Singin/SinginPage';
import { createContext, Dispatch, SetStateAction, useState } from 'react';

export const App = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>('GUEST');

  return (
    <BrowserRouter>
      <AppContext.Provider value={{ isLogin, setIsLogin }}>
        <UseNameContext.Provider value={{ userName, setUserName }}>
          <Routes>
            <Route path='/' element={<LoginPage />} />
            <Route path='homePage' element={<HomePage />} />
            <Route path='singinPage' element={<SinginPage />} />
            <Route path='/*' element={<NotFoundPage />} />
          </Routes>
        </UseNameContext.Provider>
      </AppContext.Provider>
    </BrowserRouter>
  );
};

interface iAppContext {
  isLogin: boolean;
  setIsLogin: Dispatch<SetStateAction<boolean>>;
}

export const AppContext = createContext({} as iAppContext);

interface iUseNameContext {
  userName: string;
  setUserName: Dispatch<SetStateAction<string>>;
}

export const UseNameContext = createContext({} as iUseNameContext);
