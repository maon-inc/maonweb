const POSTHOG_HOST = 'https://us.i.posthog.com';

export const onRequest: PagesFunction = async (context) => {
  const url = new URL(context.request.url);
  const pathSuffix = url.pathname.replace(/^\/ingest/, '');
  const posthogUrl = `${POSTHOG_HOST}${pathSuffix}${url.search}`;

  const headers = new Headers(context.request.headers);
  headers.set('host', 'us.i.posthog.com');

  const response = await fetch(posthogUrl, {
    method: context.request.method,
    headers,
    body: context.request.method === 'GET' ? undefined : context.request.body,
  });

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: response.headers,
  });
};
