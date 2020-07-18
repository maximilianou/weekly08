import { Application } from 'https://deno.land/x/oak/mod.ts';

const port = 4601;

const app = new Application();

app.use( (ctx) => {
  ctx.response.body = 'Hello Deno Child';
  console.debug(`REQUEST:: ${JSON.stringify(ctx.request)}`);
});

app.addEventListener('listen', () => {
  console.log(` Listening on localhost:${port}`);
});

await app.listen( { port } );
