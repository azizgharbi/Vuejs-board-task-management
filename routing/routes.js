var HomeController = require('../controller/HomeController');

app.get('/',HomeController.index);
app.get('/api/cards',HomeController.GetCards);
app.post('/api/save/cards',HomeController.CreateCard);


