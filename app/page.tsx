import { About, Contact, Home, Projects, Services } from 'components';

export default function Main() {
  return (
    <main className='w-full h-full overflow-x-hidden scroll-smooth'>
      <Home />
      <About />
      <Projects />
      <Services />
      <Contact />
      <footer className='w-full bg-dark h-[9rem] p-7'>
        <h1 className='text-accent-1 text-3xl font-bold'>Copyright Lythmass</h1>
      </footer>
    </main>
  );
}
