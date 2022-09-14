import { useNavigate } from 'react-router-dom';
import { FC, useContext, useState } from 'react';
import { LoginForm } from '../organism/LoginForm/LoginForm';
import { AuthType, Login } from './api/auth.api';
import { apiErrorMessage } from './api/apiClient';
import { useForm } from 'react-hook-form';
import { AppContext, UseNameContext } from '../../App';

export interface LoginProps {
  title: string;
  submitText: string;
}

export type LoginFormFields = {
  userName: string;
  password: string;
};

export const LoginFormEcosystem: FC<LoginProps> = ({ title, submitText }) => {
  const { setIsLogin } = useContext(AppContext);
  const { setUserName } = useContext(UseNameContext);
  const { register, handleSubmit, formState } = useForm<LoginFormFields>();
  const navigate = useNavigate();
  const [errorText, setErrorText] = useState<string | undefined>(undefined);

  const onSubmit = async (data: AuthType) => {
    console.log(data);
    try {
      await Login(data);
      navigate('/homePage');
      setUserName(data.userName);
      setIsLogin(true);
    } catch (err) {
      setErrorText('ユーザー名またはパスワードが違います');
      const errorMsg = apiErrorMessage(err);
      console.error(errorMsg);
    }
  };

  return (
    <LoginForm
      title={title}
      submitText={submitText}
      onSubmit={handleSubmit(onSubmit)}
      register={register}
      formState={formState}
      errorText={errorText}
    />
  );
};
