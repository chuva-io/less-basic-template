const { faker } = require('@faker-js/faker');
const { create_hello } = require('helpers');

exports.process = async () => {
  const name = faker.person.firstName();
  const message = create_hello(name);
  console.log(message);
};