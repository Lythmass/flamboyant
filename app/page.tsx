import { About, Contact, Home, Projects, Services, Socials } from 'components';
import { fontSecondary } from 'fonts';

export default function Main() {
  return (
    <main className='w-full h-full overflow-y-auto overflow-x-hidden scroll-smooth'>
      <Home />
      <About />
      <Projects />
      <Services />
      <Contact />
      <footer className='w-full lg:px-10 gap-4 flex-col lg:flex-row bg-dark h-[9rem] p-7 flex justify-start lg:justify-between items-start lg:items-center'>
        <h1
          className={`text-accent-2 w-full text-xl font-bold ${fontSecondary.className}`}
        >
          © Copyright 2023. All rights are reserved.
        </h1>
        <div>
          <Socials iconsColor='--accent-2' />
        </div>
      </footer>
    </main>
  );
}
