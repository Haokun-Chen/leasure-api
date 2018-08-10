const config = require('config');

function checkjwtKey() {
  if (!config.get('jwtPrivateKey')) {
    throw new Error('FATAL ERROR: jwtPrivateKey is not defined.');
  }
}

exports.checkjwtKey = checkjwtKey;