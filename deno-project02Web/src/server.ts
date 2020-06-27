import { Application } from 'https://deno.land/x/oak/mod.ts';

const port = 4600;
const app = new Application();

app.use( (ctx) => {
  console.log(`HTTP ${ctx.request.method} on ${ctx.request.url}`);
  ctx.response.body = 'Starting Deno Learning Project! ';
});

app.addEventListener('listen', () => {
  console.log(`Listening on localhost:${port} `);
});

await app.listen({ port });
