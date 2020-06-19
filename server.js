var express = require('express');
var app = express();

app.use(express.static('./dist/task-list-web'));

app.get('/*', (_req, res) => {
  res.sendFile('index.html', { root: 'dist/task-list-web/' });
});

app.listen(process.env.PORT || 8080);
