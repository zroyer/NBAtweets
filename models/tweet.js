var mongoose = require('mongoose');

var schema = new mongoose.Schema({
  twid: String,
  active: Boolean,
  author: String,
  avatar: String,
  body: String,
  date: Date,
  screenname : String
});

schema.statics.getTweets = function(current, offset, cb) {
  var tweets = []
  var start = (current * 10) + (offset * 1)

  Tweet.find({},'twid active author avatar body date screenname',{offset: start, limit: 10}).sort({date: 'desc'}).exec(function(err,docs){
    if(!err) {
      tweets = docs
      tweets.forEach(function(tweet){
        tweet.active = true
      });
    }
    cb(tweets)
  });
};

module.exports = Tweet = mongoose.model('Tweet', schema)