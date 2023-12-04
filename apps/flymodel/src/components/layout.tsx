import { FC, PropsWithChildren } from 'react';
import { SideNav } from './side-nav';
import { TopBar } from './top-bar';
import { NamespaceContextProvider } from './ns-context';

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex flex-row w-screen">
      <NamespaceContextProvider>
        <SideNav />
        <div className="w-full h-full relative">
          <TopBar />
          {children}
        </div>
      </NamespaceContextProvider>
    </div>
  );
};
