import { Application } from 'https://deno.land/x/oak/mod.ts';

const port = 4600;
const app = new Application();

app.use( (ctx) => {
  ctx.response.body = 'Starting Deno Learning Project! ';
});

app.addEventListener('listen', () => {
  console.log(`Listening on localhost:${port} `);
});

await app.listen({ port });
