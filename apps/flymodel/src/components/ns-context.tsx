// import { Namespace } from '@flymodel/graphql';
import {
  FC,
  PropsWithChildren,
  createContext,
  useCallback,
  useState,
} from 'react';

export type NamespaceContextT = {
  // namespace?: Namespace;
};

const NamespaceContext = createContext<
  NamespaceContextT & {
    update: (ns: NamespaceContextT) => void;
  }
>({
  update(ns) {},
});

export const NamespaceContextProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  const [ns, update] = useState<NamespaceContextT>({});
  return (
    <NamespaceContext.Provider
      value={{
        ...ns,
        update,
      }}
    >
      {children}
    </NamespaceContext.Provider>
  );
};
