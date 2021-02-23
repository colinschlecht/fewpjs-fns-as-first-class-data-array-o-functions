function wakeDog(dogName, dogBreed){
    console.log(`Wake ${dogName} the ${dogBreed}`)
}
function leashDog(dogName, dogBreed){
    console.log(`Leash ${dogName} the ${dogBreed} `)
    
}
function walkToPark(dogName, dogBreed){
    console.log(`Walk ${dogName} the ${dogBreed}`)
    
}
function throwFrisbee(dogName, dogBreed){
    console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`)
    
}
function walkHome(dogName, dogBreed){
    console.log(`Walk home with ${dogName} the ${dogBreed}`)
    
}
function unleashDog(dogName, dogBreed){
    console.log(`Unleash ${dogName} the ${dogBreed}`)

}





const routine = [
function wakeDog(dogName, dogBreed){
    console.log(`Wake ${dogName} the ${dogBreed}`)
    return wakeDog
},
function leashDog(dogName, dogBreed){
    console.log(`Leash ${dogName} the ${dogBreed} `)
    return leashDog
    
},
function walkToPark(dogName, dogBreed){
    console.log(`Walk ${dogName} the ${dogBreed}`)
    return walkToPark
    
},
function throwFrisbee(dogName, dogBreed){
    console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`)
    return throwFrisbee
    
},
function walkHome(dogName, dogBreed){
    console.log(`Walk home with ${dogName} the ${dogBreed}`)
    return walkHome
    
},
function unleashDog(dogName, dogBreed){
    console.log(`Unleash ${dogName} the ${dogBreed}`)
    return unleashDog
}
]

function exerciseDog(dogName, dogBreed){
    for (const element of routine){
        element(dogName, dogBreed)
    }
}

exerciseDog("Colin", "GoodBoy")