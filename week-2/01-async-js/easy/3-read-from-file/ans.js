const fs = require("fs");

fs.readFile("text.txt", 'utf8', (err, data) => {

    console.log("After Reading File");
    console.log("Data : " + data);

});

let a = 0;

console.log("Heavy operation");

for(let i=0; i<10000000000; i++){
    a += i;
}