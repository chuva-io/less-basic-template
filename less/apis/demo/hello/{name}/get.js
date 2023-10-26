const { create_hello } = require('helpers');

module.exports = {
  process: async (request, response) => {
    const { name } = request.params;
    const message = create_hello(name);
    
    response.statusCode = 200;
    response.body = message;
    return response;
  }
}
