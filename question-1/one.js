const mixedArray = ["PIZZA", 10, true,25,false,"WINGS"]

const lowerCaseWords = someArray => {
    return new Promise((res,rej)=>{
        if(someArray) {
            

                let filtered = someArray.filter(item => typeof(item) == "string" )
            
                console.log(filtered.map(item => item.toLowerCase()) )   
            

            
        
        } else {    
            rej= () =>{console.log('No array found')}  
        }
    });
        

    }



lowerCaseWords(mixedArray)

