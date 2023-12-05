import { FC } from 'react';
import { NamespaceSelect } from './ns-select';

export const TopBar: FC = () => {
  return (
    <div
      className={`
        flex h-11 bg-black
        w-full flex-grow border-b-2 border-violet-200
        shadow-sm pr-4
      `}
    >
      <div className="w-full grow-0" />
      <div className="w-60">
        <NamespaceSelect />
      </div>
    </div>
  );
};
