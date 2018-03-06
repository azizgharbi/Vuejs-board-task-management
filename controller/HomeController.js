
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
    },
    CreateCard:function(req,res){

        CardModel.Card.create(
            { 
                title: req.body.data.title,
                description: req.body.data.description,
                status : req.body.data.status
            }, 
            { 
                fields: ['title', 'description','status'] 
            }
        ).then(card => {
            res.json(
                {   "status" : "success",
                    "zabouromek" : "omek el 9a7ba"
                });
        });
        
    }

};
