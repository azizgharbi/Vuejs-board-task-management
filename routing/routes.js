var HomeController = require('../controller/HomeController');

app.get('/',HomeController.index);
app.get('/api/cards',HomeController.GetCards);
app.post('/api/save/card',HomeController.CreateCard);
app.delete('/api/delete/card/:id',HomeController.DeleteCard);



