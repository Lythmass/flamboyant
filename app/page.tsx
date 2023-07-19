import { About, Home } from 'components';

export default function Main() {
  return (
    <main className='w-full h-screen overflow-y-auto overflow-x-hidden scroll-smooth'>
      <Home />
      <About />
    </main>
  );
}
