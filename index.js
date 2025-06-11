const { faker } = require('@faker-js/faker');
const mySql = require('mysql2')

const connection =  mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password: 'mysql@123'
});

let getRandomUser= () => {
  return {
    id: faker.string.uuid(),
    username: faker.internet.username(),
    email: faker.internet.email(),
    password: faker.internet.password()
  };
}

console.log(getRandomUser());