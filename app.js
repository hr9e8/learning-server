const http = require('http');

http
  .createServer(function (req, res) {
    res.write('On the way to being a fullstack engineer!');
    res.end();
  })
  .listen(8000);

console.log('Server started on port 8000');
