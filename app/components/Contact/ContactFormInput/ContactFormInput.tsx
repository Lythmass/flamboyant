import { FormValidation } from 'config';
import { fontSecondary } from 'fonts';
import { InputType } from 'types';

export const ContactFormInput: React.FC<InputType> = (props) => {
  return (
    <div className='w-full flex flex-col gap-1'>
      <label htmlFor={props.name} className='text-2xl font-bold'>
        {props.label}
      </label>
      {props.type !== 'textarea' && (
        <input
          {...props.register(props.name, FormValidation[props.name])}
          className={`w-full py-2 ${fontSecondary.className} text-xl px-3 bg-light border-2 border-dark focus:shadow-[0.4rem_0.4rem_var(--accent-1)] focus:outline-none text-dark font-semibold transition-all`}
          id={props.name}
          type={props.type}
          placeholder={props.placeholder}
          autoComplete='off'
        />
      )}
      {props.type === 'textarea' && (
        <textarea
          {...props.register(props.name, FormValidation[props.name])}
          id={props.name}
          placeholder={props.placeholder}
          className={`w-full h-[10rem] py-2 ${fontSecondary.className} text-xl px-3 bg-light border-2 border-dark focus:shadow-[0.4rem_0.4rem_var(--accent-1)] focus:outline-none text-dark font-semibold transition-all`}
        />
      )}
      <p
        className={`mt-1 h-[0.1rem] sm:h-[1.75rem] lg:h-[0.1rem] text-accent-1 font-bold ${fontSecondary.className}`}
      >
        {props.errors}
      </p>
    </div>
  );
};

export default ContactFormInput;
