var    HomeController = require('../controller/HomeController')

app.get('/',function(req,res){
    res.render("index")
});

app.get('/api/cards/:limit/:offset',HomeController.GetCards);
app.get('/api/card/:id',HomeController.GetCard);
app.post('/api/save/card',HomeController.CreateCard);
app.delete('/api/delete/card/:id',HomeController.DeleteCard);
app.put('/api/update/card/status/:id',HomeController.UpdateCardStatus);
app.put('/api/update/card/:id',HomeController.UpdateCard);