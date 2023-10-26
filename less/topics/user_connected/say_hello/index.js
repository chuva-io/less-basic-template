// Import `sockets` from Less.
const { sockets } = require('@chuva.io/less');
const { create_hello } = require('helpers');

module.exports.process = async (payload) => {
  // Parse the message.
  const { connection_id } = JSON.parse(payload);
  const message = create_hello(connection_id);

  // Send the payload to the desired socket `connection_ids`.
  await sockets.demo.publish(message, [connection_id]);
};