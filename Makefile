install: npm install

start: npm run babel-node -- 'src/bin/brain-games.js'

build:
	rm -rf dist
	npm run build

test:
	npm test

publish:
	npm publish
