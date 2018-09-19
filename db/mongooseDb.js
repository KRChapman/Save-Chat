var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.set('useCreateIndex', true)
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/ChatApp', {  useNewUrlParser: true }, function (error) {
  if (error) {
    console.log("error", error);
  }
})

module.exports.mongooseDb = mongoose;