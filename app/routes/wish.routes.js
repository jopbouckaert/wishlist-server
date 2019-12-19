module.exports = (app) => {
    const wishes = require('../controllers/wish.controller.js');

    // Create a new Tring
    app.post('/wishes', wishes.create);

    // Retrieve all wishes
    app.get('/wishes', wishes.findAll);

    // Retrieve last wish
    app.get('/wishes/last', wishes.findLast);

    // Retrieve a single wish with wishId
    app.get('/wishes/:wishId', wishes.findOne);

    // Update a wish with wishId
    app.put('/wishes/:wishId', wishes.update);

    // Delete a wish with wishId
    app.delete('/wishes/:wishId', wishes.delete);

}