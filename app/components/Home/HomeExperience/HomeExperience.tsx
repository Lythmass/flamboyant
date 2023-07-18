import { HomeExperienceType } from 'types';

export const HomeExperience: React.FC<HomeExperienceType> = (props) => {
  return (
    <div className='w-1/4 text-dark h-full border-2 border-dark flex justify-center items-center shadow-[0.4rem_0.4rem_var(--accent-1)] hover:bg-accent-2 hover:text-light transition-all'>
      <h1 className='text-4xl text-center capitalize'>
        {props.quantity}+ {props.topic}
      </h1>
    </div>
  );
};

export default HomeExperience;
