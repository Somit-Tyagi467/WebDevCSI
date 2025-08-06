let a = [1,4,7,9,3]
console.log("original array : ",a)
console.log("mapped")
// mapping
let a2 = a.map((e,value,a)=>{
    return e**2
})
console.log(a2)
console.log("filtered")
//filter
console.log(a.filter((e)=>{
    if (e>2)
        return true
    return false
}))
console.log("reduced")
//reduce
console.log(a.reduce((a,b)=>{
    return a+b
}))