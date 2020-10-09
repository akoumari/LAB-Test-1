const resolvedPromise = (ms) => {
    setTimeout(() => {
        var promise = new Promise(function(resolve, reject) {
            if(ms >= 500) {
                resolve("Message : delayed promise");
            }
            else{
                reject(Error("It broke"));
            }
        });
        console.log(promise);
    }, ms)
}

resolvedPromise(500);
const rejectedPromise  = (ms) => {
    try {
        if(ms < 500){throw new Error("Error: rejected time");}
        setTimeout(() => {
            if(ms <= 500){
                var promise = new Promise(function(resolve, reject) {
                    resolve("Message : delayed exception!");     
                });
            }
            console.log(promise);
        }, ms)
    } catch(e){
        console.error("Error : delayed exception!");
    }
}

rejectedPromise(400);