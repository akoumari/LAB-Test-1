const fs = require("fs");
const dir = "./log"

const deleteLog = (dir) => {
    if(fs.existsSync(dir)){

        fs.readdirSync(dir).forEach((file, index) => {
            console.log(`deleting file... ${file}`) 
        })
        fs.rmdirSync(dir, { recursive: true });
    }
}


deleteLog(dir)