const fs = require("fs");
const dir = "./log"

let writeData = (dir) => {
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    }
    let data = "lol lol lol"
    let fileName =''
    for (let i =0; i < 10; i++ ) {
        fileName = `log${i}.txt`
        fs.appendFile(`./log/${fileName}`, data, function (err) {
            if (err) throw err;
        });
        console.log(fileName);
    }
    
  }


writeData(dir)