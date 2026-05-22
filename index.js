
// PROMISE 
function walkDog(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const dogWalk = false;
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

walkDog().catch(error => {console.log(error); return cleanHouse()})
         .then(value => {console.log(value); return takeOutTrash()})
         .then(value => {console.log(value); console.log('You have finished all the tasks')});