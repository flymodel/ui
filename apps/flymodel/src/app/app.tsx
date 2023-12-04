import { FC, Suspense } from 'react';
import { Layout } from '../components/layout';
import styles from './app.module.css';
import { Outlet } from '@tanstack/react-router';

export const Root: FC = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};

export default Root;
