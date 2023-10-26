// Import topics from Less.
const { topics } = require('@chuva.io/less');

exports.process = async ({ connection_id }) => {
  // Send event as string.
  const message = JSON.stringify({ connection_id });
  await topics.user_connected.publish(message);
};