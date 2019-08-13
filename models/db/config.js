const mysql = require('mysql');
const db = mysql.createConnection({
  host: 'localhost',
  user: 'smile',
  password: 'woaiwo1234',
  database: 'n_server'
});

db.connect(function (err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + db.threadId);
});

module.exports = db;

// db.end();