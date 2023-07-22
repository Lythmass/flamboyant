import { FormType } from 'types';
import { UseFormRegister } from 'react-hook-form';

export type InputType = {
  label: string;
  type: string;
  placeholder: string;
  name: 'firstName' | 'email' | 'subject' | 'message';
  register: UseFormRegister<FormType>;
  errors?: string;
};
