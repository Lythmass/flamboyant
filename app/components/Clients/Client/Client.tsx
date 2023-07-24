import { fontSecondary } from 'fonts';
import Image from 'next/image';
import { ClientType } from './ClientType';

export const Client: React.FC<ClientType> = () => {
  return (
    <div className='w-[60%] m-auto flex flex-col gap-8 items-center border-b-2 border-b-accent-1 p-10'>
      <Image
        className='w-40 h-40 object-cover shadow-[0.4rem_0.4rem_var(--accent-1)]'
        alt='client testimonial'
        src='/images/luffy.png'
        width={1400}
        height={700}
      />
      <h1
        className={`${fontSecondary.className} text-2xl text-center text-dark`}
      >
        &quot;
        <i>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          rerum necessitatibus.
        </i>
        &quot;
      </h1>
      <p className='text-lg font-semibold text-dark'>John Doe - Google Inc</p>
    </div>
  );
};

export default Client;
