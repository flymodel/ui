import { PaginatedNamespacesQuery } from '@flymodel/graphql';
import request from 'graphql-request';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useRecoilState } from 'recoil';
import { NamespaceContextT, namespaceState } from './ns-context';
import { Fragment, useState } from 'react';

import { Combobox, Transition } from '@headlessui/react';
import { CheckCircle, Circle } from 'react-feather';
import { paginatedNamespaces } from '../queries/paginatedNamespaces';

export const NamespaceSelect = () => {
  const [current, setData] = useRecoilState(namespaceState);

  const [query, setQuery] = useState('');
  const { data, isLoading, isError, ...rest } = useInfiniteQuery({
    queryKey: ['namespaceQuery', query],
    initialPageParam: { page: 0, size: 25, name: query },
    getNextPageParam: (lastPage: PaginatedNamespacesQuery, pages) =>
      lastPage.namespace.page,
    queryFn: async ({ pageParam }) => {
      return request('/graphql', paginatedNamespaces, pageParam);
    },
  });

  // useEffect(() => {
  //   if (data && current !== data && !isLoading && !isError) {
  //     setData(data);
  //   }
  //   return () => setData({});
  // }, [data, current, isLoading, isError, setData]);

  console.log('namespaces', data?.pages, isLoading, isError, rest);
  if (!data) {
    return <>Load</>;
  }

  const buttonArgs = { className: 'text-red-400' };
  return (
    <Combobox
      value={current.namespace}
      onChange={(data: NamespaceContextT['namespace']) => {
        console.log('select', data);
        setData({ ...current, namespace: data });
      }}
    >
      <div className="relative mt-1 h-full w-full grow-1">
        <div
          className="
                relative w-full cursor-default rounded-none
              bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 
              focus-visible:ring-red-500 focus-visible:ring-offset-2
               focus-visible:ring-offset-yellow-300 
               sm:text-sm"
        >
          <Combobox.Input
            className="w-full"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          <Combobox.Button className="absolute inset-y-0 right-0 flex items-center z-50 bg-white shadow-none">
            {current.namespace ? (
              <CheckCircle {...buttonArgs} />
            ) : (
              <Circle {...buttonArgs} />
            )}
          </Combobox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')}
          >
            <Combobox.Options className="h-full flex-row space-y-1">
              {data?.pages.flatMap((it) =>
                it.namespace.data.map((ns) => (
                  <Combobox.Option key={ns.id} value={ns}>
                    {({ selected, active }) => (
                      <div className="flex flex-row space-between border-1 rounded-sm border-black">
                        <span
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {ns.name}
                        </span>
                        <span className="text-ellipsis">{ns.description}</span>
                      </div>
                    )}
                  </Combobox.Option>
                ))
              )}
              {/* <div>{it.namespace.totalItems} Namespaces</div> */}
            </Combobox.Options>
          </Transition>
        </div>
      </div>
    </Combobox>
  );
};
