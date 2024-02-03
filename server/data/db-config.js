const knex = require('knex')
const configs = require('../knexfile.js')
const environment = process.env.NODE_ENV || 'development'


//THOUGHTS: I think there is a lot more I can do here, another thing I should look into, 'cause I think theres a lot of functionality here
module.exports = knex(configs[environment])
