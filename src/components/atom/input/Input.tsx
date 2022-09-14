import { FC, forwardRef, ComponentPropsWithoutRef } from 'react';

export type InputType = 'text' | 'password';

type InputProps = ComponentPropsWithoutRef<'input'>;

export type SimpleInputProps = {
  id: string;
  name: string;
  label: string;
  type?: InputType;
} & Omit<InputProps, 'size'>;

export const SimpleInput: FC<SimpleInputProps> = forwardRef<HTMLInputElement, SimpleInputProps>(
  ({ id, name, label, type = 'text', placeholder, ...props }, ref) => {
    return <input id={id} ref={ref} name={name} type={type} aria-label={label} placeholder={placeholder} {...props} />;
  },
);

SimpleInput.displayName = 'SimpleInput';
