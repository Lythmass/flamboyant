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
    <div className='min-w-[var(--navbar-length)] bg-light border-r-2 border-dark h-full flex items-center flex-col py-16 gap-20'>
      <h1 className='text-4xl text-center font-bold text-accent-1'>
        Monkey D. Luffy
      </h1>
      <div className='flex flex-col items-center justify-center w-full gap-4'>
        {displayNavBarItems}
      </div>
    </div>
  );
};

export default NavBar;
