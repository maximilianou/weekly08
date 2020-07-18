
get: 
	cd denoNews && deno run --allow-net getNews.js
getasync:
	cd denoNewsAsync && deno run --allow-net getNews.js
web02:
	cd deno-project02Web && deno run --allow-net src/server.ts
web03: 
	cd denoweb03 && deno run --allow-net src/server.ts
web04: 
	cd denoweb04 && deno run --allow-net src/server.ts
web05: 
	cd denoweb05 && deno run --allow-net src/server.ts
web06: 
	cd denoweb06 && deno run --allow-net src/server.ts
web07: 
	cd denoweb07 && deno test 
web08: 
	cd denoweb08 && deno run --allow-net src/server.ts
web09: 
	cd denoweb09 && deno run --allow-net --allow-read src/server.ts
web11: 
	cd denoweb11 && deno run --allow-net --allow-read src/server.ts
web12: 
	cd denoweb12 && deno run --allow-net --allow-read src/server.ts
web13: 
	cd denoweb13 && deno run --allow-net --allow-read src/server.ts
web14: 
	cd denoweb14 && deno run --allow-net --allow-read src/server.ts
