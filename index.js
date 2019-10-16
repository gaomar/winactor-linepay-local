const exec = require('child_process').exec;
const express = require('express');
 
// express
const app = new express();
const port = 3000;
 
app.get('/', (req, res) => {
    exec("callMemo.lnk", function(err, data) {  
    });    
    res.send('Hello World!');
});
 
// run express server
app.listen(port, () => {
    console.log(`Server running on ${port}`)
});