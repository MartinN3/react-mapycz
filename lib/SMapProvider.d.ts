import React from 'react';
import { LoaderApiConfig } from './types';
export declare type SMapProviderProps<T> = T & {
    loadingElement?: React.ReactNode;
    loaderApiConfig?: LoaderApiConfig | null;
};
declare const SMapProvider: <T extends {}>(Component: React.ComponentType<T>) => (props: SMapProviderProps<T>) => JSX.Element;
export default SMapProvider;
