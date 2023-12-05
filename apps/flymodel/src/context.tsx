import {
  RouterProvider,
  Router,
  Route,
  RootRoute,
} from '@tanstack/react-router';
import Root from './app/app';
import Home from './app/pages/home';

const rootRoute = new RootRoute({
  component: Root,
});

const home = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
});

const routeTree = rootRoute.addChildren([home]);

const router = new Router({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export const AppRouter = () => <RouterProvider router={router} />;
