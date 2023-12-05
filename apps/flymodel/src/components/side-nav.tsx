import { FC, useCallback } from 'react';
import { Button } from './button';
import { Home, ChevronLeft } from 'react-feather';

import { useLocalStorage } from 'usehooks-ts';

export const SideNav: FC = () => {
  const [open, setOpen] = useLocalStorage('nav', false);
  const invNav = useCallback(() => setOpen(!open), [open, setOpen]);
  const className = `text-xl ${open ? 'w-40' : 'w-min'}`;
  const common = {
    hideChildren: !open,
  };
  return (
    <div
      aria-roledescription="Primary Navigation"
      role="navigation"
      className="relative h-screen bg-black/80 transition-colors duration-300"
      onClick={!open ? invNav : undefined}
    >
      <Button
        {...common}
        className={`${className} navButtonSecondary`}
        icon={Home}
        color="yellow"
      >
        Home
      </Button>
      <Button
        {...common}
        onClick={invNav}
        className={`
          ${className}
          fixed bottom-0
          navButtonPrimary
        `}
        icon={ChevronLeft}
        color="red"
        aria-roledescription={`${open ? 'Close' : 'Open'} Navigation`}
        iconClass={`
                ${open && 'rotate-180'}
                transition-transform
          `}
      />
    </div>
  );
};
