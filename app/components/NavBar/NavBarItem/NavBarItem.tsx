import Link from 'next/link';
import { NavBarItemType } from './NavBarItemType';

export const NavBarItem: React.FC<NavBarItemType> = (props) => {
  const before = `before:text-accent-1 before:w-0 before:capitalize before:overflow-hidden before:absolute before:content-[attr(content)] before:left-0 before:top-[0.09375rem] before:hover:w-full before:transition-all`;
  return (
    <div className='flex justify-start w-1/2'>
      <Link href={`#${props.link}`}>
        <span
          content={props.title}
          className={`${before} w-full relative capitalize text-2xl text-left text-dark tracking-wider overflow-hidden`}
        >
          {props.title}
        </span>
      </Link>
    </div>
  );
};

export default NavBarItem;
