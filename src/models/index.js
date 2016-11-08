const mongoose = require('mongoose');

const config = require('../globalConfig');

mongoose.connect(config.db, {
  server: {poolSize: 20}
}, function (err) {
  if (err) {
    console.error('connect to %s error: ', config.db, err.message);
    process.exit(1);
  }
});

require('./catagory');

exports.CatagoryModel = mongoose.model('Catagory');
