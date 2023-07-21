import { About, Home, Projects, Services } from 'components';

export default function Main() {
  return (
    <main className='w-full h-screen overflow-y-auto overflow-x-hidden scroll-smooth'>
      <Home />
      <About />
      <Projects />
      <Services />
    </main>
  );
}
