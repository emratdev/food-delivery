import type { FC, ReactNode } from "react";


type SearchParams = { [key: string]: string | string[] | undefined };


export type LayoutType = FC<{
  children: ReactNode;
}>;

export interface ParamsWithLocale {
  [key: string]: string;
}

export type PageType<Params extends ParamsWithLocale = ParamsWithLocale> = FC<{
  params: Promise<Params>;
  searchParams: Promise<SearchParams>;
}>;