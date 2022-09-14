import { useNavigate } from 'react-router-dom';
import { Header } from '../organism/Header/Header';
import { FC, useContext } from 'react';
import { AppContext } from '../../App';

interface HeaderEcosystemProps {
  isLogin: boolean;
}

export const HeaderEcosystem: FC<HeaderEcosystemProps> = ({ isLogin }: HeaderEcosystemProps) => {
  const { setIsLogin } = useContext(AppContext);
  const navigate = useNavigate();

  const OnClickLogin = () => {
    navigate('/');
    setIsLogin(false);
  };
  const OnClickSingin = () => {
    navigate('/singinPage');
    setIsLogin(false);
  };

  return <Header isLogin={isLogin} onClickLogin={OnClickLogin} OnClickSingin={OnClickSingin} />;
};
