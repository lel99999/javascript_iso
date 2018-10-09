# javascript_iso
- - -
modern javascript development
- - -
### Install application server
$npm install hapi --save
- - -
### Development Workflow

$npm install babel-cli babel-preset-es2015 --save-dev 

alias babel=./node_modules/.bin/babel

babel src/index.js --out-file dist/index.js

$npm install gulp --save-dev
$alias gulp=./node_modules/.bin/gulp

create gulpfile.js

### Add gulp-babel plugin

$npm install gulp-babel --save-dev

### @babel/core error

#### babel version < 7
$npm install babel-core babel-preset-env --save-dev 

#### babel 7
$npm install @babel/core @babel/preset-env --save-dev 

#### Install additional monitoring packages 
$npm install gulp-nodemon --save-dev
$npm install run-sequence --save-dev

#### HTML Related Info
$npm install nunjucks -save


