import { useNavigate } from 'react-router-dom';
import { Header } from '../organism/Header/Header';
import { FC } from 'react';

interface HeaderEcosystemProps {
  isLogin: boolean;
}

export const HeaderEcosystem: FC<HeaderEcosystemProps> = ({ isLogin }: HeaderEcosystemProps) => {
  const navigate = useNavigate();
  const OnClickLogin = () => {
    navigate('/');
  };
  const OnClickSingin = () => {
    navigate('/singinPage');
  };
  return <Header user='test' isLogin={isLogin} onClickLogin={OnClickLogin} OnClickSingin={OnClickSingin} />;
};
