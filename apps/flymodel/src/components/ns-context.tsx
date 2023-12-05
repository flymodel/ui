// import { Namespace } from '@flymodel/graphql';
import { Namespace } from '@flymodel/graphql';
import { atom } from 'recoil';

export type NamespaceContextT = {
  namespace?: Omit<Namespace, '__typename'>;
};

export const namespaceState = atom<NamespaceContextT>({
  key: 'namespaceState',
  default: {},
});
// const NamespaceContext = createContext<
//   NamespaceContextT & {
//     update: (ns: NamespaceContextT) => void;
//   }
// >({
//   update(ns) {},
// });

// export const NamespaceContextProvider: FC<PropsWithChildren> = ({
//   children,
// }) => {
//   const [ns, update] = useState<NamespaceContextT>({});
//   return (
//     <NamespaceContext.Provider
//       value={{
//         ...ns,
//         update,
//       }}
//     >
//       {children}
//     </NamespaceContext.Provider>
//   );
// };
