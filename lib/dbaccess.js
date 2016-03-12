var mongoClient = require('mongodb').MongoClient;

function getWines(pVintner,response,callback){
    mongoClient.connect('mongodb://192.168.73.252:27017/myDb',function(err,db){   
        if (err) {
            throw err;
        }
    
        db.collection('wines').find({"vintner.name": pVintner}).toArray(function(err, result) {
            if (err) {
            throw err;
            }
            callback(result,response);
        });
    });
};

module.exports.getAllWinesOfVintner = getWines;
