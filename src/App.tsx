import { useState, Fragment, Dispatch, createContext, SetStateAction } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Dashboard } from './components/page/Dashboard/Dashboard';
import { LoginPage } from './components/page/Login/LoginPage';
import { HomePage } from './components/page/Home/HomePage';
import { NotFoundPage } from './components/page/NotFound/NotFoundPage';
import { SinginPage } from './components/page/Singin/SinginPage';

export const App = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>('GUEST');

  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <AppContext.Provider value={{ isLogin, setIsLogin }}>
            <UseNameContext.Provider value={{ userName, setUserName }}>
              <Route path='/' element={<LoginPage />} />
              <Route path='dashboard' element={<Dashboard />} />
              <Route path='homePage' element={<HomePage />} />
              <Route path='singinPage' element={<SinginPage />} />
              <Route path='/*' element={<NotFoundPage />} />
            </UseNameContext.Provider>
          </AppContext.Provider>
        </Routes>
      </BrowserRouter>
    </Fragment>
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
