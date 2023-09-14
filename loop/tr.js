let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// var1 = undefined ?? 15
// val1 = null ?? 10 ?? 20
// console.log(val1)

//ternary operator

const iceTeaPrice = 100
// iceTeaPrice >= 80 ? console.log("less than 80") : console.log("more than 80")


// for loop

for (let index = 0; index < 10; index++) {
    const element = index;
    // console.log(element)
}

for(let i = 0; i<= 10; i++){
    // console.log(`Outer loop value: ${i}`)
    for(let j=0;j <= 10; j++){
        // console.log(`Inner loop value ${j} and inner loop ${i}`)
        console.log(i + '*' + j + ' = ' + i*j)
    }
}


let myArray = ["flash", "Batman", "superman"]

for (let index = 0; index <= array.length; index++) {
    const element = myArray[index];
    console.log(element)
    
}