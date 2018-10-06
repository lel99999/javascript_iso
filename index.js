var Hapi = require('hapi');

var server = new Hapi.Server({
  host: 'localhost',
  port: 8888
});

//add route
server.route({
  method: 'GET',
  path: '/theman',
  handler: function(request,h){
    return 'theman is here';
  }
});

//start the server
server.start();
