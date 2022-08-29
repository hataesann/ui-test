const Color = 'blue' || 'red' || 'white';

interface SimpleButtonProps {
  color?: typeof Color;
}

const className = {
  base: 'rounded py-2 font-bold px-4 ',
  colorBlue: 'bg-blue-500 hover:bg-blue-700 text-white',
  colorRed: 'bg-red-500 hover:bg-red-700 text-white',
  colorWhite: 'bg-gray-50 hover:bg-gray-300',
} as const;

export const SimpleButton: React.FC = ({ color }: SimpleButtonProps) => {
  const buttonClassName = `${className.base} ${
    color === 'blue' ? className.colorBlue : color === 'red' ? className.colorRed : className.colorWhite
  }`;
  return <button className={buttonClassName}>Button</button>;
};
