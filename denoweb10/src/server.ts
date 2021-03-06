import { Application } from 'https://deno.land/x/oak/mod.ts';

const port = 4601;

const app = new Application();

app.use( (ctx) => {
  console.debug(`HTTP:: ${ctx.request.method} on ${ctx.request.url}!`);
  ctx.response.body = 'Hello Deno MUS, JUS, JUS.';
});

app.addEventListener('listen', () => {
  console.log(` Listening on localhost:${port}`);
});

await app.listen( { port } );
