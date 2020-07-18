import { Application, 
         Context, 
         Router,
         helpers } from 'https://deno.land/x/oak/mod.ts';

import models from './models/index.ts';
import routes from './routes/index.ts';

const port = 4620;

const app = new Application();

const logging = async (ctx: Context, next: Function) => {
  console.debug(`${new Date()}::HTTP:: ${ctx.request.method} on ${ctx.request.url}!`);
  await next();
};

app.use(logging);

app.use(async (ctx, next) => {
  ctx.state = { 
    models,
    me: models.users.get('1'),
  };
  await next();
});


app.use(routes.session.routes());
app.use(routes.session.allowedMethods());
app.use(routes.user.routes());
app.use(routes.user.allowedMethods());
app.use(routes.message.routes());
app.use(routes.message.allowedMethods());


app.addEventListener('listen', () => {
  console.info(` Listening REST API on localhost:${port} !!`);
});

await app.listen( { port } );
