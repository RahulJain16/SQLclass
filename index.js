const { faker } = require('@faker-js/faker');
const mysql2 = require('mysql2')
const express = require("express");
const app = express();

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

/*let q = "INSERT INTO user (id, username,email,password) VALUES ?";
let data = [];
for(let i=1; i<100; i++){
  data.push(getRandomUser());
}
*/  



app.get("/",(req,res) => {
  let q = `SELECT count(*) FROM user`;
  

try{
  connection.query(q, (error,result) =>{
    if(error) throw error;
    console.log(result[0]["count(*)"]);
    res.send("success");
  })
} catch(error) {
  console.log(error);
  res.send("some error in DB");
}
connection.end();
})


app.listen("8080",() => {
console.log("app is listening");
})







