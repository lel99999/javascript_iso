var Hapi = require('hapi');
import nunjucks from 'nunjucks';

nunjucks.configure('./dist');

// move from node/commonjs to ES6
//import Hapi from 'hapi';

const server = new Hapi.Server({
  host: 'localhost',
  port: 8888
});

//add route
server.route({
  method: 'GET',
  path: '/theman',
  handler: function(request,h){
    nunjucks.render('index.html',{
        fname: 'Test', lname: 'LNTest'},
      },)

    return 'theman is here';
  }
});

//start the server
server.start();
