const { create_hello } = require('helpers');

module.exports = {
  process: async (request, response) => {
    // Get query param.
    const { name } = request.query;
    const message = create_hello(name);
    
    // Prepare response
    response.statusCode = 200;
    response.body = message;
    return response;
  }
}
