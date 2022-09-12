import { HeaderEcosystem } from '../../ecosystem/HeaderEcosystem';
import { SinginFormEcosystem } from '../../ecosystem/SinginFormEcosystem';

export const SinginPage = () => {
  return (
    <>
      <HeaderEcosystem isLogin={false} />
      <SinginFormEcosystem title='新規登録' submitText='登録' />
    </>
  );
};
