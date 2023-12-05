import { FC } from 'react';
import { Layout } from '../components/layout';
import '@fontsource/roboto';
import '@fontsource/poppins';
import '../index.css';
import './app.module.css';
import 'react-toastify/dist/ReactToastify.css';

import { Outlet, ScrollRestoration } from '@tanstack/react-router';
import { RootProviders } from '../providers/root';

export const Root: FC = () => {
  return (
    <RootProviders>
      <Layout>
        <Outlet />
        <ScrollRestoration />
      </Layout>
    </RootProviders>
  );
};

export default Root;
