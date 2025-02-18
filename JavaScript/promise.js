/*function promiseEg() {
    return new Promise((resolve, reject) => {
        let value = false;
        setTimeout(() => {
            if (value) {
                resolve("The promise is resolved");
            } else {
                reject("The promise is not resolved");
            }
        }, 1000); 
    });
}

promiseEg()
    .then((res) => {
        console.log(res);
    })
    .catch((res) => {
        console.log(res);
    });
    */
   
    //location finder
    //1.promise(locfound,locNotfound)
   
    /*function locationFinder(loc,time){
        var location = new Promise((locFound,locNotFound)=>{
          setTimeout(()=>{
            if(isLocationFound(loc,time)){
                locFound("America");
            }
            else{
                locNotFound(loc,"Not Found");
            }
          },time)
        });
    location.then((found,notFound)=>{
        console.log(found);
    })
    .catch(()=>{
        console.log(notFound);
    })
    }
    isLocationFound = (loc,time)=>{
        location = "America"
        t = 5000;
        if(loc === location && time<=t) {
            return true;
        }
        else{
            return false;
        }
    
    }
    locationFinder("chennai",5000);
    */
    function locationFinder(loc, time) {
        var location = new Promise((locFound, locNotFound) => {
            setTimeout(() => {
                if (isLocationFound(loc, time)) {
                    locFound("America");
                } else {
                    locNotFound("Not Found"); // Fixed rejection handling
                }
            }, time);
        });
    
        location.then((found) => {
            console.log(found);
        })
        .catch((error) => { // Fixed catch handling
            console.log("not found");
        });
    }
    
    const isLocationFound = (loc, time) => {
        let location = "America"; 
        let t = 5000;
        return loc === location && time <= t;
    };
    
    locationFinder("chennai", 5000);
    