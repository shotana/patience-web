type ReturnTyps<T> = {
  [K in keyof T]: T[K] extends (...args: any[]) => any
    ? ReturnType<T[K]>
    : PickActionType<T[K]>;
};

export type Unbox<T> = T extends { [K in keyof T]: infer U } ? U : never;

export type PickActionType<T> = Unbox<ReturnTyps<T>>;
