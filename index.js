const { faker } = require('@faker-js/faker');
const mysql2 = require('mysql2')

const connection =  mysql2.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password: 'abcd@123456',
});


let getRandomUser= () => {
  return [
     faker.string.uuid(),
     faker.internet.username(),
     faker.internet.email(),
     faker.internet.password()
  ];
}

let q = "INSERT INTO user (id, username,email,password) VALUES ?";
let data = [];
for(let i=1; i<100; i++){
  data.push(getRandomUser());
}

/*try{
  connection.query(q,[users], (error,result) =>{
    if(error) throw error;
    console.log(result);
  })
} catch(error) {
  console.log(error)
}
connection.end();
*/


