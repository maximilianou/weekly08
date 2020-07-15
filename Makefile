
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
