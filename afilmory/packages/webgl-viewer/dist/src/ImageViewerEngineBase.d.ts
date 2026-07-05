export declare abstract class ImageViewerEngineBase {
    abstract getScale(): number;
    abstract zoomAt(x: number, y: number, scale: number, animated?: boolean): void;
    abstract loadImage(url: string, preknownWidth?: number, preknownHeight?: number): Promise<void>;
    abstract destroy(): void;
}
