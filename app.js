var twitter = require('ntwitter');
var http =  require('http');
var util = require('util');

var twit = new twitter({
  consumer_key: 'NmILEE7xp8X8gGv2NZslew',
  consumer_secret: 'jMRpxzxqzhQgpMwPKF6m0O4KgVeXpVOEv1jMRaXdqr8',
  access_token_key: '15198474-bTMvBOrUgZZt4FK85qmKIIJfAqsGpJl69ebwqGp8Z',
  access_token_secret: 'mg1kxVam2XS4AAvGuPPu1cnLiiK2bl9VKqudFyGrYI'
});

twit.stream('statuses/filter', {track:'vmworld'}, function(stream) {
    stream.on('data', function(data) {
        console.log(util.inspect(data));
    });
    stream.on('error', function(error){
      console.log(error)
    });
});

var app = http.createServer(function(req, res){

});

app.listen(3000);

