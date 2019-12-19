const Wish = require('../models/wish.model.js');

// Create and Save a new Wish
exports.create = (req, res) => {


    if (req.query.key == process.env.API_KEY) {
        // Create a Wish
        const wish = new Wish({
            superCapVoltage: req.body.superCapVoltage || null,
            chargingPower: req.body.chargingPower || null,
            consumptionPower: req.body.consumptionPower || null,
            controllerTemperature: req.body.controllerTemperature || null

        });

        // Save Wish in the database
        wish.save()
            .then(data => {
                res.send(data);
            }).catch(err => {
                res.status(500).send({
                    message: err.message || "Some error occurred while creating the Wish."
                });
            });
    } else {
        res.status(500).send({
            message: "No correct API key"
        })
    }

};

// Retrieve and return all wishes from the database.
exports.findAll = (req, res) => {
    Wish.find()
        .then(wishes => {
            res.send(wishes);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving wishes."
            });
        });
};

// Retrieve and return last wish from the database.
exports.findLast = (req, res) => {
    Wish.find().sort({ createdAt: -1 }).limit(1).then(wish => {
        res.send(wish);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occored while retrieving last wish."
        })
    })
};

// Find a single wish with a tringId
exports.findOne = (req, res) => {
    Wish.findById(req.params.tringId)
        .then(wish => {
            if (!wish) {
                return res.status(404).send({
                    message: "Wish not found with id " + req.params.tringId
                });
            }
            res.send(wish);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Wish not found with id " + req.params.tringId
                });
            }
            return res.status(500).send({
                message: "Error retrieving wish with id " + req.params.tringId
            });
        });
};

// Update a wish identified by the tringId in the request
exports.update = (req, res) => {

    if (req.query.key == process.env.API_KEY) {

        // Find wish and update it with the request body
        Wish.findByIdAndUpdate(req.params.tringId, {
            superCapVoltage: req.body.superCapVoltage || "undefined",
            chargingPower: req.body.chargingPower || "undefined",
            consumptionPower: req.body.consumptionPower || "undefined",
            controllerTemperature: req.body.controllerTemperature || "undefined"
        }, { new: true })
            .then(wish => {
                if (!wish) {
                    return res.status(404).send({
                        message: "Wish not found with id " + req.params.tringId
                    });
                }
                res.send(wish);
            }).catch(err => {
                if (err.kind === 'ObjectId') {
                    return res.status(404).send({
                        message: "Wish not found with id " + req.params.tringId
                    });
                }
                return res.status(500).send({
                    message: "Error updating wish with id " + req.params.tringId
                });
            });
    } else {
        res.status(500).send({
            message: "No correct API key"
        })
    }
};

// Delete a wish with the specified tringId in the request
exports.delete = (req, res) => {

    if (req.query.key == process.env.API_KEY) {

        Wish.findByIdAndRemove(req.params.tringId)
            .then(wish => {
                if (!wish) {
                    return res.status(404).send({
                        message: "Wish not found with id " + req.params.tringId
                    });
                }
                res.send({ message: "Wish deleted successfully!" });
            }).catch(err => {
                if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                    return res.status(404).send({
                        message: "Wish not found with id " + req.params.tringId
                    });
                }
                return res.status(500).send({
                    message: "Could not delete wish with id " + req.params.tringId
                });
            });
    } else {
        res.status(500).send({
            message: "No correct API key"
        })
    }
};