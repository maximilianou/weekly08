
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
web15: 
	cd denoweb15 && deno run --allow-net --allow-read src/server.ts 
get15: 
	curl http://localhost:4606 
post15:
	curl -X POST http://localhost:4606 
put15: 
	curl -X PUT http://localhost:4606 
delete15:
	curl -X DELETE http://localhost:4606 
web16: 
	cd denoweb16 && deno run --allow-net --allow-read src/server.ts 
get16: 
	curl http://localhost:4607/users
post16:
	curl -X POST http://localhost:4607/users 
put16: 
	curl -X PUT http://localhost:4607/users 
delete16:
	curl -X DELETE http://localhost:4607/users 
web17: 
	cd denoweb17 && deno run --allow-net --allow-read src/server.ts 
put17: 
	curl -X PUT http://localhost:4608/users/123
delete17:
	curl -X DELETE http://localhost:4608/users/123 
web18: 
	cd denoweb18 && deno run --allow-net --allow-read src/server.ts 
web19: 
	cd denoweb19 && deno run --allow-net --allow-read src/server.ts 
post19:
	curl -X POST -H "Content-Type:application/json" http://localhost:4619/messages -d '{ "text":"Hi Family" }'
web20: 
	cd denoweb20 && deno run --allow-net --allow-read src/server.ts 
post20:
	curl -X POST -H "Content-Type:application/json" http://localhost:4620/messages -d '{ "text":"Hi Family!!" }'
get20:
	curl http://localhost:4620/messages 
