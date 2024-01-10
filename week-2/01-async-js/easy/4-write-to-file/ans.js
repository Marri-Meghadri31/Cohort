const fs = require("fs");

fs.readFile("text.txt", 'utf8', (err, data) => {

    console.log("Original Data : " + data);
    data += " -By Meghadri";

    fs.writeFile("text.txt",data,'utf8',(err) => {
        console.log("Modified data : " + data);
    })

    console.log("Heavy operation after file write call");
    for(let i=0;i<1000000000;i++){
        a+=i;
    }
});


console.log("Heavy operation");
let a=0;
for(let i=0;i<1000000000;i++){
    a+=i;
}