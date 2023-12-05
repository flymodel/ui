import { render } from '@testing-library/react';

import App from './app';
import { RootProviders } from '../context';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <RootProviders>
        <App />
      </RootProviders>
    );
    expect(baseElement).toBeTruthy();
  });

  it('should have a greeting as the title', () => {
    const ok = render(<App />);
  });
});
