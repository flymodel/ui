import { FC, PropsWithChildren } from 'react';
import { SideNav } from './side-nav';
import { TopBar } from './top-bar';
import { DevTools } from './dev';
// import { NamespaceContextProvider } from './ns-context';
import { ToastContainer } from 'react-toastify';

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex flex-row w-screen relative">
      <SideNav />
      <div className="w-full h-full relative">
        <TopBar />
        {children}
        <ToastContainer />
      </div>
      <DevTools position="bottom-right" />
    </div>
  );
};
