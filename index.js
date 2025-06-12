const { faker } = require('@faker-js/faker');
const mysql2 = require('mysql2')

const connection =  mysql2.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password: 'abcd@123456',
});

let q = "INSERT INTO user (id, username,email,password) VALUES (?,?,?,?)";
let user = ["123","abc_newuser","123@gmail.com","abc"];

try{
  connection.query(q,user, (error,result) =>{
    if(error) throw error;
    console.log(result);
  })
} catch(error) {
  console.log(error)
}
connection.end();


let getRandomUser= () => {
  return {
    id: faker.string.uuid(),
    username: faker.internet.username(),
    email: faker.internet.email(),
    password: faker.internet.password()
  };
}

