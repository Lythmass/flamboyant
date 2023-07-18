import { HomeExperienceType } from 'types';

export const HomeExperience: React.FC<HomeExperienceType> = (props) => {
  return (
    <div className='w-1/4 text-dark bg-light h-full border-2 border-dark flex justify-center items-center shadow-[0.4rem_0.4rem_var(--accent-1)] hover:shadow-[0.8rem_0.8rem_var(--accent-1)] hover:translate-x-[-0.4rem] hover:translate-y-[-0.4rem] hover:bg-accent-2 hover:text-light transition-all'>
      <h1 className='text-4xl text-center capitalize'>
        {props.quantity}+ {props.topic}
      </h1>
    </div>
  );
};

export default HomeExperience;
