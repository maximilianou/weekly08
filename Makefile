
get: 
	cd denoNews && deno run --allow-net getNews.js
getasync:
	cd denoNewsAsync && deno run --allow-net getNews.js
web02:
	cd deno-project02Web && deno run --allow-net src/server.ts
