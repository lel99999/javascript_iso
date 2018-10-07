# javascript_iso
cutting edge javascript development

babel src/index.js --out-file dist/index.js

alias babel=./node_modules/.bin/babel

- - -
## Development Workflow

$npm install gulp --save-dev
$alias gulp=./node_modules/.bin/gulp

create gulpfile.js

### Add gulp-babel plugin

$npm install gulp-babel --save-dev

### @babel/core error

#### babel version < 7
$npm install --save-dev babel-core babel-preset-env

#### babel 7
$npm install --save-dev @babel/core @babel/preset-env
