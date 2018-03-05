
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
                title: req.body.title,
                description: req.body.description,
                status : req.body.status
            }, 
            { 
                fields: ['title', 'description','status'] 
            }
        ).then(card => {
            res.json({status : 'ok','data': cards});
                console.log('card saved !');
        });
    }

};
