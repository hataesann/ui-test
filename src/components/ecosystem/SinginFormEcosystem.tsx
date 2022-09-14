import { useNavigate } from 'react-router-dom';
import { FC } from 'react';
import { AuthType, Singin } from './api/auth.api';
import { apiErrorMessage } from './api/apiClient';
import { LoginForm } from '../organism/LoginForm/LoginForm';
import { useForm } from 'react-hook-form';

export interface SinginProps {
  title: string;
  submitText: string;
}

export type SinginFormFields = {
  userName: string;
  password: string;
};

export const SinginFormEcosystem: FC<SinginProps> = ({ title, submitText }) => {
  const { register, handleSubmit, formState } = useForm<SinginFormFields>();
  const navigate = useNavigate();

  const onSubmit = async (data: AuthType) => {
    alert('登録しますか？');
    await Singin(data);
    try {
      navigate('/homePage');
    } catch (err) {
      const errorMsg = apiErrorMessage(err);
      console.error(errorMsg);
    }
  };
  return (
    <div>
      <LoginForm
        title={title}
        submitText={submitText}
        onSubmit={handleSubmit(onSubmit)}
        register={register}
        formState={formState}
      />
    </div>
  );
};
