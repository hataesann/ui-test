import { useNavigate } from 'react-router-dom';
import { FC } from 'react';
import { AuthType, Singin } from './api/auth.api';
import { useForm } from 'react-hook-form';
import { apiErrorMessage } from './api/apiClient';
import { SinginForm } from '../organism/SinginForm/SinginForm';

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
      <SinginForm
        title={title}
        submitText={submitText}
        onSubmit={handleSubmit(onSubmit)}
        register={register}
        formState={formState}
      />
    </div>
  );
};
