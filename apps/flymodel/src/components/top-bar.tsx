import { FC } from 'react';
import { NamespaceSelect } from './ns-select';

export const TopBar: FC = () => {
  return (
    <div
      className={`flex h-8 bg-black
              w-full flex-grow border-b-2 border-violet-200
              shadow-sm`}
    >
      <div className="w-full grow-0" />
      <NamespaceSelect />
    </div>
  );
};
