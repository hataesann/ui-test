import { useState, FC } from 'react';
import { useForm, FieldValues } from 'react-hook-form';
import { Button } from '../../atom/button/Button';
import { FormInput } from '../../molecule/from-input/FormInput';

interface LoginProps {
  title: string;
  submitText: string;
  onClickLogin: () => void;
}

type LoginFormFields = {
  userName: string;
  password: string;
};

export const LoginForm: FC<LoginProps> = ({ title, submitText, onClickLogin }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormFields>();

  const [isPassword, setIsPassword] = useState<boolean>(false); //password表示/非表示
  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <div className='h-screen bg-blue-50'>
      <form onSubmit={handleSubmit(onSubmit)} className='m-auto w-96 p-4'>
        <div className='relative h-96 bg-red-50 p-1 text-center'>
          <div className='absolute left-32 top-11 border-b-4 border-pink-300 p-2 text-lg font-bold'>
            <p>{title}</p>
          </div>
          <div className='absolute left-16 top-28'>
            <FormInput
              id='userName'
              type='text'
              name='userName'
              label='userName'
              placeholder='userName'
              register={register}
              rules={{ required: 'ユーザー名を入力してください', minLength: 4 }}
              errors={errors}
            />
          </div>
          <div className='absolute top-44 left-16'>
            <FormInput
              id='password'
              type={isPassword ? 'text' : 'password'}
              name='password'
              label='password'
              placeholder='password'
              register={register}
              rules={{
                required: 'パスワードを入力してください.',
                minLength: { value: 4, message: '4文字以上入力してください' },
              }}
              errors={errors}
            />
            <input type='checkbox' name='isPassword' onClick={() => setIsPassword((pre) => !pre)} />
            &nbsp; パスワードを表示する
          </div>
          <div className='absolute left-28 bottom-7'>
            <Button type='submit' label={submitText} onClick={onClickLogin} />
          </div>
        </div>
      </form>
    </div>
  );
};
