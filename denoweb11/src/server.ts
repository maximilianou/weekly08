import { Application } from 'https://deno.land/x/oak/mod.ts';

const port = 4602;

const app = new Application();

app.use( async (ctx, next) => {
  console.debug(`HTTP:: ${ctx.request.method} on ${ctx.request.url}!`);
  await next();
});

app.use( (ctx) => {
  console.debug(`Returninig the Web Page:`);
  ctx.response.body = 'Hello Deno MUS, JUS, JUS.';
});

app.addEventListener('listen', () => {
  console.info(` Listening on localhost:${port} !!`);
});

await app.listen( { port } );
