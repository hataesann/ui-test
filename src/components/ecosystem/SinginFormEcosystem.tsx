import { useNavigate } from 'react-router-dom';
import { FC, useContext, useState } from 'react';
import { AuthType, Singin } from './api/auth.api';
import { apiErrorMessage } from './api/apiClient';
import { LoginForm } from '../organism/LoginForm/LoginForm';
import { useForm } from 'react-hook-form';
import { AppContext, UseNameContext } from '../../App';

export interface SinginProps {
  title: string;
  submitText: string;
}

export type SinginFormFields = {
  userName: string;
  password: string;
};

export const SinginFormEcosystem: FC<SinginProps> = ({ title, submitText }) => {
  const { setIsLogin } = useContext(AppContext);
  const { setUserName } = useContext(UseNameContext);
  const { register, handleSubmit, formState } = useForm<SinginFormFields>();
  const navigate = useNavigate();
  const [errorText, setErrorText] = useState<string | undefined>(undefined);
  const onSubmit = async (data: AuthType) => {
    try {
      await Singin(data);
      navigate('/homePage');
      setUserName(data.userName);
      setIsLogin(true);
    } catch (err) {
      setErrorText('このユーザ名は既に使用されています');
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
