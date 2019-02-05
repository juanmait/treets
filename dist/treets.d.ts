export declare type Path = string;
export declare type Primitive = string | boolean | number | undefined | null | symbol;
export declare type Map = [Path, Primitive];
interface Traversable {
    [key: string]: any;
    [key: number]: any;
}
export declare const getValuesOnKey: <T extends Traversable>(obj: T) => boolean;
export {};
//# sourceMappingURL=treets.d.ts.map