const express = require('express')
const app = express()
const port = 5000
var mysql = require('mysql')

fetch('https://zeel-my.sharepoint.com/:x:/r/personal/vc_miloni_shah_zee_com/_layouts/15/Doc.aspx?sourcedoc=%7B832418BC-00D1-4FF8-AE85-CCBAF1F968F7%7D&file=Landing%20Page%20_Executive%20View_updated%20(1).xlsx&action=default&mobileredirect=true&cid=aad12f55-e959-4742-b7ec-9ab497a99878').then(res => JSON.parse(res)).then(result => console.log(result))

app.get('/viewersApi', (req, res) => {
  res.end('55.22M');

      // fs.readFile(`graphapi/userapi.json`, "utf-8", (err, data) => {
      //   res.end(data);    
      // });

    // var con = mysql.createConnection({
    //     host: "127.0.0.1",
    //     user: "root",
    //     password: "",
    //     database: "dict"
    //   });

    //   con.connect(function(err) {
    //     if (err) throw err;
    //     //Select all customers and return the result object:
    //     con.query("SELECT * FROM chart_data", function (err, result, fields) {
    //         if (err) throw err;
    //         var scoreHome = [];
    //         result.forEach(element => {
    //             console.log(element.score);
    //             scoreHome.push(element.score)
    //         });
    //         var l = JSON.stringify(scoreHome)  
    //         console.log(l);
    //         res.end(l);
    //     });
    //   });  
});

app.get('/watchTimeApi', (req, res) => {
  res.end('115.2 Min');
});

app.get('/adApi', (req, res) => {
  res.end('355.55 M');
});

app.listen(port, () => {
  console.log('This aplication is running on port 5000')
});