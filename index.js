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



app.get("/",(req,res){
  res.send("welcome to home page");
})


app.listen("8080",() => {
console.log("app is listening");
})








/*try{
  connection.query(q,[data], (error,result) =>{
    if(error) throw error;
    console.log(result);
  })
} catch(error) {
  console.log(error)
}
connection.end();
*/