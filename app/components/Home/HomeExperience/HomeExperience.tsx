import { HomeExperienceType } from 'types';

export const HomeExperience: React.FC<HomeExperienceType> = (props) => {
  return (
    <div className='w-full lg:w-1/4 boxes text-dark bg-accent-1 h-full border-2 border-dark flex justify-center items-center shadow-[0.4rem_0.4rem_var(--dark)] hover:shadow-[0.8rem_0.8rem_var(--dark)] hover:translate-x-[-0.4rem] hover:translate-y-[-0.4rem] transition-all'>
      <h1 className='text-4xl xl:text-4xl lg:text-2xl font-bold text-center capitalize'>
        <span className='text-light'>{props.quantity}+</span> {props.topic}
      </h1>
    </div>
  );
};

export default HomeExperience;
