const { faker } = require('@faker-js/faker');
const mysql2 = require('mysql2')

const connection =  mysql2.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password: 'abcd@123456',
});

let q = "INSERT INTO user (id, username,email,password) VALUES ?";
let users = [["123b","abc_newuserb","123@gmail.comb","abcb"],
            ["123c","abc_newuserc","123@gmail.comc","abcc"]];

try{
  connection.query(q,[users], (error,result) =>{
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

