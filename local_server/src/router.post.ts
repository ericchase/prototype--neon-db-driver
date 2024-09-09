import { query } from './db.js';

export async function post(req: Request): Promise<void | Response> {
  const url = new URL(req.url);
  const pathname = decodeURIComponent(url.pathname);
  console.log(`POST     ${pathname}`);

  // console.log(`HEADERS`);
  // for (const [k, v] of req.headers) {
  //   console.log(`    ${k}: ${v}`);
  // }

  // custom routing here
  switch (pathname) {
    case '/database':
      const { text, params } = await req.json();
      const result = await query(text, params);
      // console.log({ result });
      return new Response(JSON.stringify(result), {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
      });
  }
}

export async function analyzeBody(req: Request | Response) {
  const data: {
    blob?: true;
    form?: true;
    json?: true;
    text?: true;
  } = {};
  try {
    await req.clone().blob();
    data.blob = true;
  } catch (_) {}
  try {
    await req.clone().formData();
    data.form = true;
  } catch (_) {}
  try {
    await req.clone().json();
    data.json = true;
  } catch (_) {}
  try {
    await req.clone().text();
    data.text = true;
  } catch (_) {}
  return data;
}
