import { Routes } from "@constants/routes";

export function formatRoute(
  route: Routes,
  params: { [key: string]: string | number },
): string {
  const formattedRoute = Object.keys(params).reduce((acc, key) => {
    return acc.replace(`:${key}`, `${params[key]}`);
  }, route);

  return formattedRoute;
}
