import { DebugInfo } from './interface';
/**
 * WebGL 图片查看器调试信息组件
 *
 * 该组件用于显示 WebGL 图片查看器的实时调试信息，
 * 包括缩放比例、位置、LOD 级别、性能指标等。
 */
import * as React from 'react';
/**
 * 调试信息组件的引用接口
 */
export interface DebugInfoRef {
    /** 更新调试信息的方法 */
    updateDebugInfo: (debugInfo: DebugInfo) => void;
}
/**
 * 调试信息组件的属性接口
 */
interface DebugInfoProps {
    /** 组件引用 */
    ref: React.Ref<DebugInfoRef>;
    outlineEnabled?: boolean;
    onToggleOutline?: (value: boolean) => void;
}
/**
 * 调试信息显示组件
 *
 * 在开发模式下显示 WebGL 图片查看器的详细状态信息，
 * 帮助开发者诊断性能问题和调试功能。
 *
 * @param props 组件属性
 * @returns JSX 元素
 */
declare const DebugInfoComponent: {
    ({ ref, outlineEnabled, onToggleOutline }: DebugInfoProps): React.JSX.Element | null;
    displayName: string;
};
export default DebugInfoComponent;
export { DebugInfoComponent as DebugInfo };
