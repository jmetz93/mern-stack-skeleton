const MongoClient = require('mongodb');

const uri = process.env.DB_URL; 

// to ensure database connection only opens when necessary
// add additional variables for collections
let _db, _exampleCollection; 

MongoClient.connect(uri, { 
  useNewUrlParser: true,
  poolSize: 5 })
  .then(client => {
    console.log('Successfully connected to db');
    _db = client.db();
    // example collection collections here 
    _exampleCollection = _db.collection('example')
  })
  .catch(err => {
    console.error('Error connecting to db: ', err);
  });  

const db = () => _db;
const exampleCollection = () => _exampleCollection;

module.exports = {
  db,
  exampleCollection
}