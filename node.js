const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
app.use(express.static('public'))

var fs = require('fs');
 
fs.readFile('DATA', 'utf8', function(err, contents) {
    console.log(contents);
});
 
console.log('after calling readFile');