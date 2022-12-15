const express = require('express')
const app = express()


app.get('/graphapi', (req, res) => {
    var con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "",
        database: "dict"
      });
      
      con.connect(function(err) {
        if (err) throw err;
        //Select all customers and return the result object:
        con.query("SELECT * FROM chart_data", function (err, result, fields) {
            if (err) throw err;
            var scoreHome = [];
            result.forEach(element => {
                console.log(element.score);
                scoreHome.push(element.score)
            });
            var l = JSON.stringify(scoreHome)  
            console.log(l);
            res.end(l);
        });
      });  
})