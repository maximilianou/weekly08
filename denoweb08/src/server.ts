import { serve } from 'https://deno.land/std/http/server.ts';

import { mapStory } from './stories.ts';

const url = 'http://hn.algolia.com/api/v1/search?query=javascript';

const server = serve({ port: 4680 });

console.log(`Listening: ${JSON.stringify(server)}  `);

for await ( const req of server ) {

  console.log(JSON.stringify(req.conn.rid));
  console.log(JSON.stringify(req.conn.localAddr));
  console.log(JSON.stringify(req.conn.remoteAddr));

  const result = await fetch(url).then((result) => result.json());

  const stories = result.hits.map(mapStory);

  req.respond(  { body: JSON.stringify(stories) } );

}
