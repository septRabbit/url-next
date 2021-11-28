import {ReactNode} from 'react'
import SvgUrllogo from '../images/Urllogo'

type LayoutProps = {
  children?: ReactNode,
};

function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <header className="px-6 mb-5 bg-blue-400 shadow-md">
        <h1 className="text-white mx-auto py-6 text-left md:pl-20 text-2.5xl lg:text-5xl font-bold max-w-screen-xl flex justify-start">
          
        <SvgUrllogo height={40}/>
         
        </h1>
      </header>
      {children}
      <footer className='relative w-full px-6 py-4 mt-4 text-white bg-blue-400 shadow-top'>
        <h2 className='text-center'>
          If you like our website, please donate us to upgrade from
          {' '}
          <b>alpha</b>
          {' '}
          to
          {' '}
          <b>beta</b>
        </h2>zs
        <h2 className='text-center'>Contact Line ID: Alpha </h2>
    </footer>
    </div>
  );
}

export default Layout;
