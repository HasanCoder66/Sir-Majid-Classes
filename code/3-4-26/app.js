let arr = [1,2,3,4,5]


// let bigNum = []

// for(let i = 0 ; i < arr.length; i++){
// // console.log(arr[i])

// // console.log(arr[i] > 2)
// if(arr[i] > 2){
//     bigNum.push(arr[i])
// }
// }

// console.log(bigNum)



// let filteredItems = arr.filter((item) => item > 2)

// console.log(filteredItems)





// normal function/

// parameters values ko recieve kerty hain ==> jab fn chalaa or arguement ayaa

// function sum () {
// return 12 + 22


// }


// let sumReturn = sum()

// console.log(sumReturn + 66)



// arguement wahan hota hai jahan fn call kia jata hai 


let filterItems = arr.filter(function (item){
if(item > 3){
//    return item
}
})

console.log(filterItems, "Filter ==>")

const filteredItems = arr.filter((item) => item > 3)
console.log(filteredItems,  "Filtered ==>")
