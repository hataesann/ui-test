import { useNavigate } from 'react-router-dom';
import { FC } from 'react';
import { LoginForm } from '../organism/Main/LoginForm';

export interface LoginProps {
  title: string;
  submitText: string;
}

export const LoginFormEcosystem: FC<LoginProps> = ({ title, submitText }) => {
  const _navigate = useNavigate();
  const OnClickLogout = () => {
    console.log('OK');
    //navigate('/logoutPage');
  };
  return <LoginForm title={title} submitText={submitText} onClickLogin={OnClickLogout} />;
};
