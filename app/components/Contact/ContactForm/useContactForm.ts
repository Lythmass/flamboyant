import { useForm } from 'react-hook-form';
import { FormType } from 'types';
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

export const useContactForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormType>({ mode: 'all' });
  const formRef = useRef<HTMLFormElement>(null);
  const [notificationModal, setNotificationModal] = useState('');
  const submitHandler = () => {
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID == undefined
          ? ''
          : process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID == undefined
          ? ''
          : process.env.NEXT_PUBLIC_TEMPLATE_ID,
        formRef!.current == null ? '' : formRef.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY == undefined
          ? ''
          : process.env.NEXT_PUBLIC_PUBLIC_KEY,
      )
      .then(
        () => {
          setNotificationModal('Your message has been sent successfully!');
        },
        (error) => {
          setNotificationModal(error.text);
        },
      );
  };
  return {
    register,
    handleSubmit,
    submitHandler,
    errors,
    formRef,
    notificationModal,
    setNotificationModal,
  };
};
