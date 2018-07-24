/*  db.js

    Database Helper Function

    grabs instance of database and exports it to make it possible to access the database throughout 
    the app without having to manually declare it each time

*/

var loki = require('lokijs');

//var db = new loki('db.json');

var db = new loki('db.json', {
	autoload: true,
	autoloadCallback : databaseInitialize,
	autosave: true, 
	autosaveInterval: 4000
});

function databaseInitialize() {
    
      db.addCollection('customers').insert([
        {customer: 'Sunrise Bank',
         API_Key: 'AIzaSyAWwP5yH9Hke0FQkwEUujx-L8QelE27ZpY',
               Type: 'atm',
         Language: 'en'
              }, 
        {customer: 'Happy Credit Union',
         API_Key: 'AIzaSyAYaNzyQoSDKW0FIUxhEgUEsmPic9XqtPU',
               Type: 'bank',
         Language: 'es'
              },
        {customer: 'Paris FCU',
         API_Key: 'AIzaSyAdAnwAfMAEDU3igUPKq_v8QrapgzyNHT4',
               Type: 'all',
         Language: 'fr'
              }
      ]);
      
      db.saveDatabase();
    }

module.exports = db;

