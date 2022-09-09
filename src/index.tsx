import React, { createContext, Dispatch, SetStateAction } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Dashboard } from './components/page/Dashboard/Dashboard';
import { LoginPage } from './components/page/Login/LoginPage';
import { LogoutPage } from './components/page/Logout/LogoutPage';
import { NotFoundPage } from './components/page/NotFound/NotFoundPage';
import { SinginPage } from './components/page/Singin/SinginPage';
import reportWebVitals from './reportWebVitals';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='logoutPage' element={<LogoutPage />} />
        <Route path='singinPage' element={<SinginPage />} />
        <Route path='/*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);

interface iAppContext {
  isLogin: boolean;
  setIsLogin: Dispatch<SetStateAction<boolean>>;
}

export const AppContext = createContext({} as iAppContext);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
