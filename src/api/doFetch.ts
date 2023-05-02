type PropsType = {
  method: string;
  url: string;
  headers?: Record<string, string>;
  body?: string;
};

export async function doFetch({
  url,
  method,
  headers,
  body,
}: PropsType): Promise<Response> {
  const response = await fetch(url, {
    method,
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
      ...headers,
    },
    body,
  });

  return response;
}
