import { 
         Context, 
         Router,
         helpers } from 'https://deno.land/x/oak/mod.ts';

import { v4 } from 'https://deno.land/std/uuid/mod.ts';

const session = new Router();
const user = new Router();
const message = new Router();

session.get('/session', (ctx) => {
  ctx.response.body = ctx.state.models.users.get( ctx.state.me.id );
});

user.get('/users', (ctx) => {
  ctx.response.body = ctx.state.models.users.values();
});

user.get('/users/:userId', (ctx) => {
  const {userId} = helpers.getQuery(ctx, {mergeParams: true});
  ctx.response.body = ctx.state.models.users.get(userId);
});

user.post('/users', async (ctx) => {
  const id = v4.generate();
  const { value: { username } } = await ctx.request.body();
  ctx.state.models.users.set(id, { id, username });
  ctx.response.body = ctx.state.models.users.get(id);
});

/*
user.put('/users/:userId', (ctx) => {
  const {userId} = helpers.getQuery(ctx, {mergeParams: true});
  ctx.response.body = `${new Date()}::${ctx.request.method}::${ctx.request.url}::${userId}::Hello Deno MUS, JUS, JUS.`;
});
*/

/*
user.delete('/users/:userId', (ctx) => {
  console.debug(`${new Date()}::Returninig the Web Page:`);
  const {userId} = helpers.getQuery(ctx, {mergeParams: true});
  ctx.response.body = `${new Date()}::${ctx.request.method}::${ctx.request.url}::${userId}::Hello Deno MUS, JUS, JUS.`;
});
*/

message.get('/messages', (ctx) => {
  ctx.response.body = ctx.state.models.messages.values();
});

message.get('/messages/:messageId', (ctx) => {
  const {messageId} = helpers.getQuery(ctx, {mergeParams: true});
  ctx.response.body = ctx.state.models.messages.get(messageId);
});

message.post('/messages', async (ctx) => {
  const id = v4.generate();
  const { value: { text } } = await ctx.request.body();
  ctx.state.models.messages.set(id, { id, text, userId: ctx.state.me.id });
  ctx.response.body = ctx.state.models.messages.get(id);
});

message.delete('/messages/:messageId', async (ctx) => {
  const { messageId } = helpers.getQuery(ctx, {mergeParams: true});
  const isDeleted = ctx.state.models.messages.delete(messageId);
  ctx.response.body = isDeleted;
});

export default {
  session,
  user,
  message,
};
