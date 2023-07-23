'use client';
import { ContactFormInput, ContactMeButton } from 'components';
import { useContactForm } from './useContactForm';
import { motion } from 'framer-motion';

export const ContactForm = () => {
  const { register, handleSubmit, submitHandler, errors, formRef } =
    useContactForm();
  return (
    <motion.form
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.25, delay: 0.25, type: 'spring' }}
      ref={formRef}
      onSubmit={handleSubmit(submitHandler)}
      className='w-full flex flex-col gap-7'
    >
      <div className='flex gap-7 md:gap-4 w-full flex-col md:flex-row'>
        <ContactFormInput
          label='Name'
          placeholder='John'
          type='text'
          name='firstName'
          register={register}
          errors={errors['firstName']?.message}
        />
        <ContactFormInput
          label='Email'
          placeholder='john@doe.com'
          type='email'
          name='email'
          register={register}
          errors={errors['email']?.message}
        />
      </div>
      <ContactFormInput
        label='Subject'
        placeholder='We would like to hire you!'
        type='text'
        name='subject'
        register={register}
        errors={errors['subject']?.message}
      />
      <ContactFormInput
        label='Message'
        placeholder='Your skills are amazing!'
        type='textarea'
        name='message'
        register={register}
        errors={errors['message']?.message}
      />
      <div className='w-full lg:mt-2'>
        <ContactMeButton>
          <button className='w-full' type='submit'>
            Submit
          </button>
        </ContactMeButton>
      </div>
    </motion.form>
  );
};

export default ContactForm;
