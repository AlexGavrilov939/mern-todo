import { matchPath } from "react-router-dom";

export function isExternalLink(path: string) {
  return path.includes("http");
}

export function getActivePath(path: string, pathname: string) {
  return path ? !!matchPath({ path, end: false }, pathname) : false;
}

export function getExactPath(path: string, pathname: string) {
  return path ? !!matchPath({ path, end: true }, pathname) : false;
}
