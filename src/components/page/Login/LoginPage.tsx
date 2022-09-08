import { FC } from 'react';
import { HeaderEcosystem } from '../../ecosystem/HeaderEcosystem';
import { LoginFormEcosystem } from '../../ecosystem/LoginFormEcosystem';

export const LoginPage: FC = () => {
  return (
    <>
      <HeaderEcosystem isLogin={false} />
      <LoginFormEcosystem title='ログイン画面' submitText='ログイン' />
    </>
  );
};
