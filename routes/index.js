var express = require('express');
var router = express.Router();
var Twit = require('twit');
var https = require("https");
setInterval(function() {
    https.get("https://tryitoutguy.herokuapp.com/");
}, 300000);
var countingT = 0
var tweet = 
   [{"status":"Black guys who love to fuck and fuck good. If you're a hot black guy and want to fuck me at 2395."},
   {"status":"If you want to move in you can move in but you have to fuck me. I need to be fucked a lot, man."},
   {"status":"Free food free rent and everything else man."},
   {"status":"Heres the deal man, men from jail, homeless, or youre a thug. You wanna come move in, your friend can move in too man."},
   {"status":"Free rent you get a lease and a key. Fuck me, piss on me, beat me, homanou."},
   {"status":"You see me and want to come over today and try it out, try it out man. If youre in my building try it out. If you want to fucking piss on me try it out."},
   {"status":"Serious replies only, lets fuck man."},
   {"status":"I'm looking for hardcore guys that mean it and want to do it and i want to deliver it."},
   {"status":"I'm a hot white trash cumdump. Lets fuck."}]
;
var T = new Twit({
    consumer_key: '3V7zZM1qpkyFYSVOBJGow2qAw',
    consumer_secret: 'boIKsmfuWQJ7zpGXOEokCTmQD0RpnoSr0wT7j6M9bC3IJcqKg6',
    access_token: '1039381013929967617-Vmx5taojz7SviuZ78UGvv6EcWe1sum',
    access_token_secret: 's1sggeKDXEWPQtcYPlQwSzE7WXVWkDhi6vlV99CiaxZWX'
  });
console.log(countingT)
  setInterval(tweetin, 1000*60*60*5)

  function tweetin(){
    
  T.post('statuses/update', tweet[countingT], tweeted);
;
  }
  function tweeted(err, data, Response){
    console.log('asdasdasda')
    if(countingT < 9){
      countingT++
    }
    else{
      countingT = 0
    }
  }
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });

});

module.exports = router;
