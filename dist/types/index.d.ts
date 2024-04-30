type IsRecord<T> = T extends Record<string, infer R> ? (R extends string | Record<string, string> ? true : never) : never;
type Colors<T> = IsRecord<T> extends true ? T : never;
type IndividualShade<T> = Record<keyof Colors<T>, keyof Colors<T>[keyof Colors<T>]> & {
    DEFAULT?: number | string;
};
export default function defaultShades<T>(colors: Colors<T>, defaultShade?: number | string | IndividualShade<T>): Colors<T>;
export {};
