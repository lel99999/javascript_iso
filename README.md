# javascript_iso
- - -
cutting edge javascript development

- - -
### Development Workflow

$npm install --save-dev babel-cli babel-preset-es2015

alias babel=./node_modules/.bin/babel

babel src/index.js --out-file dist/index.js

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

#### Install additional monitoring packages 
$npm install gulp-nodemon --save-dev
$npm install run-sequence --save-dev

#### HTML Related Info
$npm install nunjucks -save


