const express = require('express')
const app = express()
const port = 5000
var mysql = require('mysql')
const reader = require('xlsx')
const cors = require('cors')
app.use(cors())


// First Page APIs
app.get('/viewersApi', (req, res) => {
  res.end('55.22M');
});

app.get('/watchTimeApi', (req, res) => {
  res.end('115.2 Min');
});

app.get('/adApi', (req, res) => {
  res.end('355.55 M');
});

// Second Page APIs
app.get('/linearReachApi', (req, res) => {
  res.end('110.36M');
});

app.get('/linearWatchTimeApi', (req, res) => {
  res.end('543.23 Min');
});


app.get('/ottViewersApi', (req, res) => {
  res.end('65.22 Min');
});

app.get('/ottWatchTimeApi', (req, res) => {
  res.end('143.45 Min');
});

app.get('/ottAdApi', (req, res) => {
  res.end('3245.12 Min');
});


app.get('/csvApi', (req, res) => {
  // Reading our test file
  const file = reader.readFile('test.csv')

  let data = []
    
  const sheets = file.SheetNames
    
  for(let i = 0; i < sheets.length; i++)
  {
    const temp = reader.utils.sheet_to_json(
          file.Sheets[file.SheetNames[i]])
    temp.forEach((res) => {
        data.push(res)
    })
  }
  
      var scoreHome = 0;
      data.forEach(element => {
          // console.log(element.score);
          scoreHome = scoreHome + element.score;
      });
      var l = JSON.stringify(scoreHome)  
      console.log('sum issss:', scoreHome)
      res.end(JSON.stringify(scoreHome))


});




app.get('/sumAPIs', (req, res) => {
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
           var scoreHome = 0;
           result.forEach(element => {
               // console.log(element.score);
               scoreHome = scoreHome + element.score;
           });
           var l = JSON.stringify(scoreHome)  
           console.log('sum is:', scoreHome)
           res.end(JSON.stringify(scoreHome));
       });
     });  
});

app.listen(port, () => {
  console.log('This aplication is running on port 5000')
});