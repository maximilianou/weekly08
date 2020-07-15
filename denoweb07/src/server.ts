import { serve } from 'https://deno.land/std/http/server.ts';

import { mapStory } from './stories.js';

const url = 'http://hn.algolia.com/api/v1/search?query=javascript';

const server = serve({ port: 4660 });

console.log(`Listening: ${JSON.stringify(server)}  `);

for await ( const req of server ) {

  const result = await fetch(url).then((result) => result.json());

  const stories = result.hits.map(mapStory);

  req.respond(  { body: JSON.stringify(stories) } );

}
