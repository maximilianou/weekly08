import { Application, Context, Router } from 'https://deno.land/x/oak/mod.ts';

const port = 4605;

const app = new Application();

const router = new Router();
const routerMax = new Router();
const routerJoa = new Router();
const routerJul = new Router();

const logging = async (ctx: Context, next: Function) => {
  console.debug(`${new Date()}::HTTP:: ${ctx.request.method} on ${ctx.request.url}!`);
  await next();
};

app.use(logging);

router.get('/', (ctx) => {
  console.debug(`${new Date()}::Returninig the Web Page:`);
  ctx.response.body = `${new Date()}::Hello Deno MUS, JUS, JUS.`;
});

routerMax.get('/Max', (ctx) => {
  console.debug(`${new Date()}::Returninig the Web Page:`);
  ctx.response.body = `${new Date()}::Hello Deno Max!`;
});

routerJoa.get('/Joa', (ctx) => {
  console.debug(`${new Date()}::Returninig the Web Page:`);
  ctx.response.body = `${new Date()}::Hello Deno Joa!`;
});

routerJul.get('/Jul', (ctx) => {
  console.debug(`${new Date()}::Returninig the Web Page:`);
  ctx.response.body = `${new Date()}::Hello Deno Jul!`;
});

app.use(router.routes());
app.use(router.allowedMethods());

app.use(routerMax.routes());
app.use(routerMax.allowedMethods());

app.use(routerJoa.routes());
app.use(routerJoa.allowedMethods());

app.use(routerJul.routes());
app.use(routerJul.allowedMethods());

app.addEventListener('listen', () => {
  console.info(` Listening on localhost:${port} !!`);
});

await app.listen( { port } );
