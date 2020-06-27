import { Application, Context } from 'https://deno.land/x/oak/mod.ts';

const port = 4600;
const app = new Application();

const logging = async (ctx: Context, next: Function) => {
  console.log(`HTTP ${ctx.request.method} on ${ctx.request.url}`);
  await next();
};

app.use(logging);

app.use( (ctx) => {
  console.log(`returning response..`);
  ctx.response.body = 'Starting Deno Learning Project! ';
});

app.addEventListener('listen', () => {
  console.log(`Listening on localhost:${port} `);
});

await app.listen({ port });
