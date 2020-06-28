import { Application, Context, Router } from 'https://deno.land/x/oak/mod.ts';

const port = 4600;
const app = new Application();
const router = new Router();
const routerTen = new Router();
const routerControl = new Router();
const controller = new AbortController();

const { signal } = controller;

const logging = async (ctx: Context, next: Function) => {
  console.log(`HTTP ${ctx.request.method} on ${ctx.request.url}`);
  await next();
};

app.use(logging);

//app.use( (ctx) => {
//  console.log(`returning response..`);
//  ctx.response.body = 'Starting Deno Learning Project! ';
//});

router.get('/', (ctx) => {
  console.log(`returning response..`);
  ctx.response.body = 'Starting Deno Learning Project! ';
  ctx.response.body += `\n${ctx.request.url} : ${new Date()}`;
}).get('/1', (ctx) => {
  console.log(`returning response.. 1 `);
  ctx.response.body = 'Starting Deno Learning Project! 1';
  ctx.response.body += `\n${ctx.request.url} : ${new Date()}`;
}).get('/2', (ctx) => {
  console.log(`returning response.. 2 `);
  ctx.response.body = 'Starting Deno Learning Project! 2';
  ctx.response.body += `\n${ctx.request.url} : ${new Date()}`;
});

app.use(router.routes());
app.use(router.allowedMethods());

routerTen.get('/10', (ctx) => {
  console.log(`returning response..`);
  ctx.response.body = 'Starting Deno Learning Project! 10';
  ctx.response.body += `\n${ctx.request.url} : ${new Date()}`;
}).get('/11', (ctx) => {
  console.log(`returning response.. 1 `);
  ctx.response.body = 'Starting Deno Learning Project! 11';
  ctx.response.body += `\n${ctx.request.url} : ${new Date()}`;
}).get('/12', (ctx) => {
  console.log(`returning response.. 2 `);
  ctx.response.body = 'Starting Deno Learning Project! 12';
  ctx.response.body += `\n${ctx.request.url} : ${new Date()}`;
});

app.use(routerTen.routes());
app.use(routerTen.allowedMethods());

routerControl.get('/stop', (ctx) => {
  controller.abort();
});
app.use(routerControl.routes());
app.use(routerControl.allowedMethods());

app.addEventListener('listen', () => {
  console.log(`Listening on localhost:${port} `);
});

const listenPromise = app.listen({ port, signal}); 

await listenPromise;
