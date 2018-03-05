
var CardModel = require("./../models/CardModel");

module.exports = {


    index:function(req,res){
        res.render('home')
    },

    GetCards:function(req,res){
       CardModel.Card.findAll({
            attributes: ['title', 'description','status']
          }).then(cards =>{
            res.json(cards);
          }); 
    }

};
