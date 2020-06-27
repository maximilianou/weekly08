# weekly08

start with deno

```
git config --global core.editor vi

```

Makefile
```
start:
	deno run --allow-net src/server.ts
```

```
git push -o merge_request.create -o merge_request.remove_source_branch -o merge_request.target=master -o merge_request.label=learning -o merge_request.title="deno_learning_02: web" --set-upstream origin deno_learning_02_web

```

```
maximilianou@instrument:~/projects/weekly08/deno-project02Web$ git add .

maximilianou@instrument:~/projects/weekly08/deno-project02Web$ git commit -m 'learn_deno_web_ctx'

maximilianou@instrument:~/projects/weekly08/deno-project02Web$ git checkout -b 'learn_deno_web_ctx'
Switched to a new branch 'learn_deno_web_ctx'

maximilianou@instrument:~/projects/weekly08/deno-project02Web$ git push -o merge_request.create -o merge_request.remove_source_branch -o merge_request.target=master -o merge_request.label=learning -o merge_request.title="learn_deno_web_ctx" --set-upstream origin learn_deno_web_ctx
```
