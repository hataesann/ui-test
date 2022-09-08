import { HeaderEcosystem } from '../../ecosystem/HeaderEcosystem';

export const LogoutPage = () => {
  return (
    <>
      <HeaderEcosystem isLogin={true} />
      <h1 className='h-96 bg-blue-50 p-5 text-center text-2xl'>ログイン成功！😆</h1>
    </>
  );
};
