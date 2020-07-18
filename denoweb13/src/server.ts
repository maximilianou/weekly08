import { Application, Context, Router } from 'https://deno.land/x/oak/mod.ts';

const port = 4604;

const app = new Application();

const router = new Router();

const logging = async (ctx: Context, next: Function) => {
  console.debug(`${new Date()}::HTTP:: ${ctx.request.method} on ${ctx.request.url}!`);
  await next();
};

app.use(logging);


router.get('/', (ctx) => {
  console.debug(`${new Date()}::Returninig the Web Page:`);
  ctx.response.body = `${new Date()}::Hello Deno MUS, JUS, JUS.`;
});

app.use(router.routes());
app.use(router.allowedMethods());

app.addEventListener('listen', () => {
  console.info(` Listening on localhost:${port} !!`);
});

await app.listen( { port } );
