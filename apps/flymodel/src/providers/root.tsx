import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { FC, PropsWithChildren } from 'react';
import { RecoilRoot } from 'recoil';
const queryClient = new QueryClient({});

export const RootProviders: FC<PropsWithChildren> = ({ children }) => {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </RecoilRoot>
  );
};
