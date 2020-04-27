import { Lib2Class } from 'api-extractor-lib2-test/lib/index';

/** @public */
export declare function f(arg1: Lib1Class, arg2: Lib2Class): void;

/** @public */
declare class Lib1Class extends Lib1ForgottenExport {
    get readonlyProperty(): string;
    get writeableProperty(): string;
    set writeableProperty(value: string);
}

declare class Lib1ForgottenExport {
}

export { }
