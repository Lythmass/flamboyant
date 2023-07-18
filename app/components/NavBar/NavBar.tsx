import { NavBarItemsData } from 'data';
import { NavBarItem } from 'components';

export const NavBar = () => {
  const displayNavBarItems = NavBarItemsData.map((item) => {
    return (
      <NavBarItem
        key={item.id}
        id={item.id}
        title={item.title}
        icon={item.icon}
        link={item.link}
      />
    );
  });
  return (
    <div className='min-w-[var(--navbar-length)] bg-light border-r-2 border-dark h-full flex items-center flex-col py-32 gap-20'>
      <h1 className='text-4xl w-1/2 cursor-default text-start font-bold text-accent-1 drop-shadow-[0_0.25rem_var(--accent-2)] hover:drop-shadow-[0_0_var(--accent-2)] hover:translate-y-[0.25rem] transition-all'>
        Flam
        <br />
        boyant
      </h1>
      <div className='flex flex-col items-center justify-center w-full gap-4'>
        {displayNavBarItems}
      </div>
    </div>
  );
};

export default NavBar;
