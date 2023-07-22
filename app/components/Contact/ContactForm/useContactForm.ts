import { useForm } from 'react-hook-form';
import { FormType } from 'types';

export const useContactForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormType>({ mode: 'all' });

  const submitHandler = (data: FormType) => {
    console.log(data);
  };
  return { register, handleSubmit, submitHandler, errors };
};
