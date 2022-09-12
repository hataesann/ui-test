import { useState, FC } from 'react';
import { FormState, UseFormRegister } from 'react-hook-form';
import { Button } from '../../atom/button/Button';
import { LoginFormFields } from '../../ecosystem/LoginFormEcosystem';
import { FormInput } from '../../molecule/from-input/FormInput';

interface SinginProps {
  title: string;
  submitText: string;
  onSubmit: () => void;
  register: UseFormRegister<LoginFormFields>;
  formState: FormState<LoginFormFields>;
}

export const SinginForm: FC<SinginProps> = ({ title, submitText, onSubmit, register, formState: { errors } }) => {
  const [isPassword, setIsPassword] = useState<boolean>(false); //password表示/非表示

  return (
    <div className='h-screen bg-blue-50'>
      <form className='m-auto w-96 p-4'>
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
              rules={{ required: 'ユーザー名を入力してください' }}
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
            <Button type='submit' label={submitText} onClick={onSubmit} />
          </div>
        </div>
      </form>
    </div>
  );
};
