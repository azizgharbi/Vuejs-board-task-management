
var CardModel = require("./../models/CardModel");

module.exports = {


    index:function(req,res){
        res.render('home')
    },

    GetCards:function(req,res){
       CardModel.Card.findAll({
            attributes: ['id','title', 'description','status'],
            offset:  parseInt(req.params.offset),
            limit : parseInt(req.params.limit)
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
            res.json({"status" : "success"});
        });
        
    },

    DeleteCard:function(req,res){
       CardModel.Card.destroy({
            where: {
              id: req.params.id
            }
          }).then(card => {
            res.json({"status" : "success"});
        });
    },
    
    UpdateCard:function(req,res){
        
        CardModel.Card.update({
            status: req.body.data.status,
          }, {
            where: {
              id: req.params.id
            }
          }).then(card => {
            res.json({"status" : "success"});
          });
     }

};
