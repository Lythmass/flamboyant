import Link from 'next/link';

export const ContactMeButton = () => {
  return (
    <Link
      href='#contact'
      className='px-3 bg-light text-dark py-2 border-2 border-dark text-2xl hover:shadow-[0_0_var(--accent-2)] hover:translate-x-[0.4rem] hover:translate-y-[0.4rem] shadow-[0.4rem_0.4rem_var(--accent-2)] transition-all'
    >
      Reach out to me
    </Link>
  );
};

export default ContactMeButton;
