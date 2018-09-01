var mongoClient = require('mongodb').MongoClient;

function getWines(pVintner,response,callback){
    mongoClient.connect('mongodb://mongo_dock:27017/vineyard',function(err,db){   
        if (err) {            
            throw err;
        }
        else{
            callback("Success",response)
        }
    
        // db.collection('wines').find({"vintner.name": pVintner}).toArray(function(err, result) {
        //     if (err) {
        //     throw err;
        //     }
        //     callback(result,response);
        // });
    });
};

module.exports.getAllWinesOfVintner = getWines;
