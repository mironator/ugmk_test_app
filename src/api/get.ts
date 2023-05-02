import { doFetch } from "./doFetch";

type PropsType = {
  url: string;
  headers?: Record<string, string>;
};

export async function get<R>({ url, headers }: PropsType): Promise<R> {
  const response = await doFetch({
    url,
    method: "GET",
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
      ...headers,
    },
  });

  const data: R = await response.json();

  return data;
}
