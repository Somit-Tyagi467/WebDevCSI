// for loops:
let obj = {
    a:1,
    b:2,
    c:3
}

// foreach loop
let a= [23,45,78,92,1]
console.log("ForEach loop : ")
a.forEach((value,index,arr) => {
    console.log(value,index,arr)
});

//for in loop used for objects
console.log("For in loop : ")
for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(key,element)
        
    }
}

// forof loop used for array,strings,etc (iterables)
console.log("For of loop ==> ")
for (const value of a) {
    console.log("value:",value)
}