const { faker } = require('@faker-js/faker');
const mysql2 = require('mysql2')
const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"/views"));

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


//HOME PAGE
app.get("/",(req,res) => {
  let q = `SELECT count(*) FROM user`;
  try{
  connection.query(q, (error,result) =>{
    if(error) throw error;
    let count = result[0]["count(*)"];
    res.render("home.ejs",{count});
  })
} catch(error) {
  console.log(error);
  res.send("some error in DB");
}
})

//SHOW ROUTE
app.get("/user",(req,res) => {
  let q = `SELECT * FROM user`;
  try{
  connection.query(q, (error,result) =>{
    if(error) throw error;
   // console.log(result);
    res.render("showusers.ejs");
  })
} catch(error) {
  console.log(error);
  res.send("some error in DB");
}
});


app.listen("8080",() => {
console.log("app is listening");
});







