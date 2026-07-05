import { WebGLImageViewerProps, WebGLImageViewerRef } from './interface';
/**
 * WebGL图像查看器React组件
 *
 * 高性能的WebGL图像查看器组件
 */
import * as React from 'react';
/**
 * WebGL图像查看器组件
 */
export declare const WebGLImageViewer: {
    ({ ref, src, imageBlob, className, width, height, initialScale, minScale, maxScale, wheel, pinch, doubleClick, panning, limitToBounds, centerOnInit, smooth, alignmentAnimation, velocityAnimation, onZoomChange, onImageCopied, onLoadingStateChange, debug, ...divProps }: WebGLImageViewerProps & {
        imageBlob?: Blob;
    } & Omit<React.HTMLAttributes<HTMLDivElement>, "className"> & {
        ref?: React.RefObject<WebGLImageViewerRef | null>;
    }): React.JSX.Element;
    displayName: string;
};
export { type WebGLImageViewerProps, type WebGLImageViewerRef } from './interface';
