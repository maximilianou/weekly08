import { Application, 
         Context, 
         Router,
         helpers } from 'https://deno.land/x/oak/mod.ts';

import { v4 } from 'https://deno.land/std/uuid/mod.ts';

const port = 4619;

const app = new Application();

const router = new Router();

const logging = async (ctx: Context, next: Function) => {
  console.debug(`${new Date()}::HTTP:: ${ctx.request.method} on ${ctx.request.url}!`);
  await next();
};

app.use(logging);

interface User {
  id: string;
  username: string; 
};

const users = new Map<string, User>();

users.set('1', { id: '1', username: 'Max' });
users.set('2', { id: '2', username: 'Joa' });
users.set('3', { id: '3', username: 'Jul' });

interface Message {
  id: string;
  text: string;
  userId: string;
};

const messages = new Map<string, Message>();

messages.set('1', { id: '1', text: 'Hello Father', userId: '1'});
messages.set('2', { id: '2', text: 'Hello Sun', userId: '3'});


router.get('/users', (ctx) => {
  console.debug(`${new Date()}::Returninig the Web Page:`);
  ctx.response.body = Array.from(users.values());
});

router.get('/users/:userId', (ctx) => {
  console.debug(`${new Date()}::Returninig the Web Page:`);
  const {userId} = helpers.getQuery(ctx, {mergeParams: true});
  ctx.response.body = users.get(userId);
});

router.post('/users', (ctx) => {
  console.debug(`${new Date()}::Returninig the Web Page:`);
  ctx.response.body = `${new Date()}::${ctx.request.method}::${ctx.request.url}::Hello Deno MUS, JUS, JUS.`;
});

router.put('/users/:userId', (ctx) => {
  console.debug(`${new Date()}::Returninig the Web Page:`);
  const {userId} = helpers.getQuery(ctx, {mergeParams: true});
  ctx.response.body = `${new Date()}::${ctx.request.method}::${ctx.request.url}::${userId}::Hello Deno MUS, JUS, JUS.`;
});

router.delete('/users/:userId', (ctx) => {
  console.debug(`${new Date()}::Returninig the Web Page:`);
  const {userId} = helpers.getQuery(ctx, {mergeParams: true});
  ctx.response.body = `${new Date()}::${ctx.request.method}::${ctx.request.url}::${userId}::Hello Deno MUS, JUS, JUS.`;
});

router.get('/messages', (ctx) => {
  console.debug(`${new Date()}::Returninig the Web Page:`);
  ctx.response.body = Array.from(messages.values());
});

router.get('/messages/:messageId', (ctx) => {
  console.debug(`${new Date()}::Returninig the Web Page:`);
  const {messageId} = helpers.getQuery(ctx, {mergeParams: true});
  ctx.response.body = messages.get(messageId);
});

router.post('/messages', async (ctx) => {
  console.debug(`${new Date()}::${ctx.request.method}::${ctx.request.url}::`);
  const id = v4.generate();
  const { value: { text } } = await ctx.request.body();
  messages.set(id, { id, text, userId: 'U' });
  ctx.response.body = messages.get(id);
});

app.use(router.routes());
app.use(router.allowedMethods());


app.addEventListener('listen', () => {
  console.info(` Listening REST API on localhost:${port} !!`);
});

await app.listen( { port } );
