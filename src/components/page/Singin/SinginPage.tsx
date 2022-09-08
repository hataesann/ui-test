import { HeaderEcosystem } from '../../ecosystem/HeaderEcosystem';
import { LoginFormEcosystem } from '../../ecosystem/LoginFormEcosystem';

export const SinginPage = () => {
  return (
    <>
      <HeaderEcosystem isLogin={false} />
      <LoginFormEcosystem title='新規登録' submitText='登録' />
    </>
  );
};
