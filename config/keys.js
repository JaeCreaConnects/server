if (process.env.NODE_ENV === 'production') {
  //we are in prod, therefore return prod key sets
  module.exports = require('./prod')
} else {
  //we are in dev, therefore return dev key sets
  module.exports = require('./dev')
}
