import { HeaderEcosystem } from '../../ecosystem/HeaderEcosystem';

export const HomePage = () => {
  return (
    <>
      <HeaderEcosystem isLogin={true} />
      <h1 className='h-screen bg-blue-50 p-5 text-center text-2xl'>ログイン成功！😆</h1>
    </>
  );
};
