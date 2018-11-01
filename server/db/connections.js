const monk = require('monk');
const connection = process.env.MONGODB_URI || 'localhost/messages';
const db = monk(connection);

module.exports = db;