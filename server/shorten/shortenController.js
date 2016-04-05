var Shorten = require('./shortenModel.js');

// Create our necessary controller methods to perform all needed CRUD actions

exports.createOne = function(req, res) {
 console.log(req.body);
  var newCharacter =req.body;
  //callback style for now else use promises
  Shorten.create(newCharacter,function(err, newCharacter) {
    if(err) {
      return res.json(err);
    }
    res.json(newCharacter);
  });
};


// exports.profilePostHandler= function(req, res) {
//   req.user.givenName = req.body.givenName;
//   req.user.surname = req.body.surname;
//   req.user.customData.favoriteColor = req.body.favoriteColor;

//   *
//    * TODO: consolidate into a single save call when this issue is resolved:
//    * https://github.com/stormpath/express-stormpath/issues/156
   
//   req.user.save(function(err){
//     if(err){
//       res.status(err.status || 400).json(err);
//     }else{
//       req.user.customData.save(function (err){
//         if(err){
//           res.status(err.status || 400).json(err);
//         }else{
//           res.end();
//         }
//       });
//     }
//   });
// };

//To get mongo Data 
// var seedData = function(data) {

//   var newCharacter =req.body;
//   //callback style for now else use promises
//   Character.create(data,function(err, newCharacter) {
//     if(err) {
//       return console.log(err);
//     }
//     console.log(newCharacter);
//   });
// };
//

// exports.retrieve = function(req, res) {
// //identifying query parameter is going to be id

// var query = { _id : req.params.id};
//   Character.findOne(query,function(err, matchingCharacter){
//     if(err) {
//        return res.json(err);
//     }
//     res.json(matchingCharacter);
//   });

// };