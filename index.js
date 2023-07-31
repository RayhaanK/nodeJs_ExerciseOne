const {writeFile, readFile, appendFile, read} = require('fs')

readFile('./data.txt', 'utf-8', (err, data)=>{
    if(!err) 
        console.log(data);
    else
        console.log("An error occured");
})

// The second content was placed in the next line