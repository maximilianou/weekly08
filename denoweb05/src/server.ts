import { serve } from 'https://deno.land/std/http/server.ts';
import { format } from 'https://deno.land/x/date_fns/index.js';

const url = 'http://hn.algolia.com/api/v1/search?query=javascript';

const server = serve({ port: 4650 });
console.log(`Listening: ${JSON.stringify(server)}  `);
for await ( const req of server ) {

  const result = await fetch(url).then((result) => result.json());

  const stories = result.hits.map( (hit: any) => ({
    title: hit.title,
    url: hit.url,
    createdAt: format( new Date(hit.created_at_i * 1000),'yyyy-MM-dd'),
  }) 
  );

  req.respond(  { body: JSON.stringify(stories) } );

}
