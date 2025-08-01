import type { JSX, FC, ReactNode } from "react";


type SearchParams = { [key: string]: string | string[] | undefined };

export type LayoutType = FC<{
  children: ReactNode;
}>;

export interface ParamsWithLocale {
  [key: string]: string;
}

export type PageType<Params extends ParamsWithLocale = ParamsWithLocale> =
  (props: {
    params: Params;
    searchParams?: SearchParams;
  }) => Promise<JSX.Element>;
