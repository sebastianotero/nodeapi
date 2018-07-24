const Joi = require('joi');


const schema = Joi.object().keys({

    longitude: Joi.number().required(),
    latitude: Joi.number().required(),
    customer: Joi.string().required()

});

module.exports = schema;