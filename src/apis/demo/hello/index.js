// Import route from Less
const { route } = require('@chuva.io/less');
const { create_hello } = require('helpers');

module.exports = {
  get: route(async (request, response) => {
    // Get query param.
    const { name } = request.query;
    const message = create_hello(name);
    
    // Prepare response
    response.statusCode = 200;
    response.body = message;
    return response;
  }, []),

  post: route(async (request, response) => {
    // Get request body and Parse JSON string.
    const { name } = JSON.parse(request.body);
    const message = create_hello(name);
    
    // Prepare response.
    response.statusCode = 201;
    response.body = message;
    return response;
  }, [])
}
