interface ButtonProps {
  type?: 'login' | 'logout' | 'singin' | 'submit';
  label: string;
  isLoggin?: boolean;
  onClick: () => void;
}

const className = {
  login: 'bg-teal-600 hover:bg-teal-500 text-white rounded-2xl px-3 py-2 my-5 font-bold ',
  logout: 'bg-sky-500 hover:bg-sky-600 text-white rounded-2xl px-3 py-2 my-5 font-bold',
  singin: 'bg-stone-300 hover:bg-stone-400 rounded-2xl px-3 py-2 my-5 font-bold',
  submit: 'bg-sky-300 hover:bg-sky-500 rounded px-11 py-2 my-2 font-bold',
} as const;

export const Button = ({ type, label, onClick }: ButtonProps) => {
  let buttonClassName = '';

  switch (type) {
    case 'login':
      buttonClassName = className.login;
      break;
    case 'logout':
      buttonClassName = className.logout;
      break;
    case 'singin':
      buttonClassName = className.singin;
      break;
    case 'submit':
      buttonClassName = className.submit;
      break;
  }
  return (
    <button className={buttonClassName} onClick={onClick}>
      {label}
    </button>
  );
};
