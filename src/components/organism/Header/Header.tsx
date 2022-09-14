import { useContext } from 'react';
import { UseNameContext } from '../../../App';
import { Button } from '../../atom/button/Button';

interface HeaderProps {
  isLogin: boolean;
  onClickLogin: () => void;
  OnClickSingin: () => void;
}

export const Header = ({ isLogin, onClickLogin, OnClickSingin }: HeaderProps) => {
  const { userName } = useContext(UseNameContext);

  return (
    <div>
      <div className=' flex h-20 min-w-max border-b-4 bg-blue-50'>
        <h1 className='my-4 text-4xl font-extrabold'>&nbsp;LoginPage</h1>
        <nav className='ml-auto'></nav>
        {isLogin ? (
          <div className='flex'>
            <span className='my-5 rounded-2xl px-3 py-2 font-bold'>
              こんにちは、<b>{userName}</b>さん
            </span>
            <Button type='logout' label='ログアウト' onClick={onClickLogin} />
          </div>
        ) : (
          <div className='flex'>
            <Button type='login' label='ログイン' onClick={onClickLogin} />
            &nbsp;
            <Button type='singin' label='新規登録' onClick={OnClickSingin} />
          </div>
        )}
      </div>
    </div>
  );
};
