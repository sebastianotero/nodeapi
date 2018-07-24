//googleApiController.js

const Joi = require('joi');
const request = require('request');
const schema = require('../validation/schema')


var db = require('../database/db');

  
  exports.list_all = (req, res) => {

    // fetch the request data
    const data = req.body;


    // validate the request data against the schema
    Joi.validate(data, schema, (err, value) => {

        if (err) {
            // send a 422 error response if validation fails
            res.status(422).json({
                status: 'error',
                message: 'Invalid request data',
                data: data
            });
        } else {

            var config =  db.getCollection('customers').findOne({'customer':value.customer});
            //console.log(config);

            request(
                {
                    url: `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${value.latitude},${value.longitude}&rankby=distance&language=${config.Language}&type=${config.Type}&key=${config.API_Key}`,
                    json: true
                }, (error, response, body) =>{
                   console.log(JSON.stringify(body, undefined, 2));
                 

                    res.json({
                 status: 'success',
                 message: 'Success',
                 data: Object.assign(body)

             });

                });
          
        }
    });
};