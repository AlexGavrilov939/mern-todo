import { SxProps } from "@mui/system";
import { Theme } from "@mui/material/styles";
import * as React from "react";

type Only<T, U> = {
  [P in keyof T]: T[P];
} & {
  [P in keyof U]?: never;
};

export type Either<T, U> = Only<T, U> | Only<U, T>;

export type TableRowItem = {
  key?: string;
  value: string | number;
  title?: string;
  sx?: SxProps<Theme>;
};

type TableRowActionWithButton = {
  title: string;
  onClick: (event: any, data?: any) => void;
};

type TableRowActionWithNode = {
  node: (data?: any) => React.ReactNode;
};

export type TableRowAction = Either<
  TableRowActionWithButton,
  TableRowActionWithNode
> & {
  sx?: SxProps<Theme>;
};

export type TableData<T = {}> = {
  items?: T[];
  rowItems?: TableRowItem[][];
  actions?: TableRowAction[];
  page?: number;
  limit?: number;
  total?: number;
  hasMore?: boolean;
  cursorNext?: string | null;
  cursorPrev?: string | null;
};
