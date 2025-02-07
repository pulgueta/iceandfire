import type { FC, PropsWithChildren } from "react";

export type BaseComponent<Props = PropsWithChildren> = Props extends PropsWithChildren
  ? FC<Readonly<PropsWithChildren>>
  : FC<Readonly<Props>>;
