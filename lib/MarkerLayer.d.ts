import React, { ReactNode } from 'react';
import { ClusterConfig } from './types';
export declare const MarkerLayerContext: React.Context<null>;
export interface MarkerLayerProps {
    children: ReactNode;
    enableClustering?: boolean;
    clusterConfig?: ClusterConfig;
    id?: string | null;
}
declare const MarkerLayer: ({ children, enableClustering, clusterConfig, id, }: MarkerLayerProps) => JSX.Element;
export default MarkerLayer;
