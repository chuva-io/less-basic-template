const { create_hello } = require('helpers');

module.exports = {
  process: async (request, response) => {
    // Get request body and Parse JSON string.
    const { name } = JSON.parse(request.body);
    const message = create_hello(name);
    
    // Prepare response.
    response.statusCode = 201;
    response.body = message;
    return response;
  }
}
