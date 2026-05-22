// Async/Await = Async = make a function return a promise
//             = Await = make an async function wait fot prommise

function walkDog(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const dogWalk = true;
            if(dogWalk){
                resolve('You walk the dog 🐕');
            } 
            else {
                reject(`YOU DID NOT WALK THE DOG`);
            }

        }, 1000);

    })
} 

function cleanHouse(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const houseClean = true;
            if(houseClean){
                resolve('You clean the house 🧹');
            } 
            else {
                reject(`YOU DID NOT CLEAN THE HOUSE`);
            }
            
        }, 2000);

    });
}

function takeOutTrash(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const trashTakenOut = true;
            if(trashTakenOut){
                resolve('You take out the trash!');
            }
            else{
                reject('YOU DID NOT TAKE OUT THE TRASK');
            }
        }, 3000);
    });

} 

 async function doChores(){

    try{
        const walkDogResult = await walkDog();
        console.log(walkDogResult);

        const cleanHouseResult = await cleanHouse();
        console.log(cleanHouseResult);

        const takeOutTrashResult = await takeOutTrash();
        console.log(takeOutTrashResult);

        console.log('You have finishes all the tasks');
    } 
    catch(error){
        console.error(error);
    }
}

doChores();