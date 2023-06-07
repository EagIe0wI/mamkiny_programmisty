install:
	npm ci

publish:
	npm publish --dry-run

lint:
	npx eslint .

askname:
	node bin/askName.js