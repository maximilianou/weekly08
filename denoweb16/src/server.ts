import { Application, Context, Router } from 'https://deno.land/x/oak/mod.ts';

const port = 4607;

const app = new Application();

const router = new Router();

const logging = async (ctx: Context, next: Function) => {
  console.debug(`${new Date()}::HTTP:: ${ctx.request.method} on ${ctx.request.url}!`);
  await next();
};

app.use(logging);

router.get('/', (ctx) => {
  console.debug(`${new Date()}::Returninig the Web Page:`);
  ctx.response.body = `${new Date()}::${ctx.request.method}::Hello Deno MUS, JUS, JUS.`;
});

router.post('/', (ctx) => {
  console.debug(`${new Date()}::Returninig the Web Page:`);
  ctx.response.body = `${new Date()}::${ctx.request.method}::Hello Deno MUS, JUS, JUS.`;
});

router.put('/', (ctx) => {
  console.debug(`${new Date()}::Returninig the Web Page:`);
  ctx.response.body = `${new Date()}::${ctx.request.method}::Hello Deno MUS, JUS, JUS.`;
});

router.delete('/', (ctx) => {
  console.debug(`${new Date()}::Returninig the Web Page:`);
  ctx.response.body = `${new Date()}::${ctx.request.method}::Hello Deno MUS, JUS, JUS.`;
});

router.get('/users', (ctx) => {
  console.debug(`${new Date()}::Returninig the Web Page:`);
  ctx.response.body = `${new Date()}::${ctx.request.method}::${ctx.request.url}::Hello Deno MUS, JUS, JUS.`;
});

router.post('/users', (ctx) => {
  console.debug(`${new Date()}::Returninig the Web Page:`);
  ctx.response.body = `${new Date()}::${ctx.request.method}::${ctx.request.url}::Hello Deno MUS, JUS, JUS.`;
});

router.put('/users', (ctx) => {
  console.debug(`${new Date()}::Returninig the Web Page:`);
  ctx.response.body = `${new Date()}::${ctx.request.method}::${ctx.request.url}::Hello Deno MUS, JUS, JUS.`;
});

router.delete('/users', (ctx) => {
  console.debug(`${new Date()}::Returninig the Web Page:`);
  ctx.response.body = `${new Date()}::${ctx.request.method}::${ctx.request.url}::Hello Deno MUS, JUS, JUS.`;
});

app.use(router.routes());
app.use(router.allowedMethods());


app.addEventListener('listen', () => {
  console.info(` Listening REST API on localhost:${port} !!`);
});

await app.listen( { port } );
