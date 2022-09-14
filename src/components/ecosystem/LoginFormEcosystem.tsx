import { useNavigate } from 'react-router-dom';
import { FC } from 'react';
import { LoginForm } from '../organism/LoginForm/LoginForm';
import { AuthType, Login } from './api/auth.api';
import { apiErrorMessage } from './api/apiClient';
import { useForm } from 'react-hook-form';

export interface LoginProps {
  title: string;
  submitText: string;
}

export type LoginFormFields = {
  userName: string;
  password: string;
};

export const LoginFormEcosystem: FC<LoginProps> = ({ title, submitText }) => {
  const { register, handleSubmit, formState } = useForm<LoginFormFields>();
  const navigate = useNavigate();

  const onSubmit = async (data: AuthType) => {
    console.log(data);
    await Login(data);
    try {
      navigate('/homePage');
    } catch (err) {
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
    />
  );
};
