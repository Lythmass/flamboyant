import Link from 'next/link';
import { NavBarItemType } from './NavBarItemType';
import { IconsComponent } from './IconsComponent';

export const NavBarItem: React.FC<NavBarItemType> = (props) => {
  const before = `before:w-0 before:border-b-2 before:border-accent-1 before:overflow-hidden before:absolute before:left-0 before:bottom-[-0.1rem] before:hover:w-full before:transition-all before:duration-300`;
  return (
    <div className='flex justify-start items-end gap-2 w-[80%] pr-2'>
      <IconsComponent icon={props.icon} />
      <Link
        className={`${before} w-full px-3 py-2 relative capitalize text-2xl text-left text-dark tracking-wider transition-all border-b-2 border-accent-2 hover:translate-x-1`}
        href={`#${props.link}`}
      >
        {props.title}
      </Link>
    </div>
  );
};

export default NavBarItem;
