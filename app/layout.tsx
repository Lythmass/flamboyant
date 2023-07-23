import './globals.css';
import type { Metadata } from 'next';
import { fontMain } from 'fonts';
import { NavBar, NavBarButton } from 'components';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${fontMain.className} bg-light`}>
        <div className='flex w-full overflow-y-auto h-screen items-start justify-between'>
          <NavBarButton />
          <NavBar />
          {children}
        </div>
      </body>
    </html>
  );
}
