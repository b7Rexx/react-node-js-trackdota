const config = require('./src/configs');
const app = require('./src/app');

app.listen(config.port, function (err, done) {
  if (err)
    console.log('Error listening to server >>', err);
  else
    console.log('Listening on port >>', config.port);
});
