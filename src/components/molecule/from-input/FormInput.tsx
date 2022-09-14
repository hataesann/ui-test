import { UseFormRegister, Path, RegisterOptions, DeepMap, FieldValues, FieldError, get } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { SimpleInput, SimpleInputProps } from '../../atom/input/Input';

export type FormInputProps<TFormValues extends FieldValues> = {
  name: Path<TFormValues>;
  register?: UseFormRegister<TFormValues>;
  rules?: RegisterOptions;
  errors?: Partial<DeepMap<TFormValues, FieldError>>;
} & Omit<SimpleInputProps, 'name'>;

const className = {
  hasError:
    'transition-colors focus:outline-none focus:ring-2 focus:ring-opacity-50 border-red-600 hover:border-red-600 focus:border-red-600 focus:ring-red-600',
};

export const FormInput = <TFormValues extends FieldValues>({
  className: divClassName,
  name,
  register,
  rules,
  errors,
  ...props
}: FormInputProps<TFormValues>): JSX.Element => {
  const errorMessages = get(errors, name);
  const hasError = !!(errors && errorMessages);

  return (
    <div className={divClassName} aria-live='polite'>
      <SimpleInput
        name={name}
        aria-invalid={hasError}
        className={hasError ? className.hasError : ''}
        {...props}
        {...(register && register(name, rules))}
      />
      <ErrorMessage
        errors={errors}
        name={name as any}
        render={({ message }) => <p className='mt-1 block text-left font-serif text-sm text-red-600'>{message}</p>}
      />
    </div>
  );
};
