const resolvedPromise = () =>{
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve("message: delayed success!")
        }, 500);
    })
}

const rejectedPromise = () =>{
    return new Promise((resolve) =>{
        setTimeout(() => {
            try{
                resolve('error:', 'delayed exception!');
            } catch(e){
                reject()
            }
        }, 500);
    });
}

/*
const delayedSuccess= () =>{
    setTimeout(() => {
        let success = {'message': 'delayed success!'}
        console.log(success);
    }, 500)
}

const delayedExpection= () => {
    setTimeout(() => {
        try{
            throw new Error('error: delayed exception!');
        } catch (e){
            console.error(e);
        }
    }, 500)
}
*/

resolvedPromise()
rejectedPromise()