const fs = require("fs");

fs.readFile("test.txt", "utf-8",(err,data)=>{
    data = data.replace(/\s+/g, ' ').trim();
    fs.writeFile("test.txt", data, "utf-8", (err)=>{
        console.log("File cleaned successfully.")
    })
})