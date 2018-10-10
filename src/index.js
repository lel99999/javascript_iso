var Hapi = require('hapi');
var nunjucks = require('nunjucks');
//import nunjucks from 'nunjucks';

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
//handler: function(request,reply){
  handler: async (request,h) => {
    const params = request.params
    nunjucks.render('index.html',{
        fname: 'Test', lname: 'LNTest'
        },function(err,html){
          return html;
 //       reply(html);
    });
//  return h.response("hello"); 
    return h.response(html); 
  }
});

//start the server
server.start();
