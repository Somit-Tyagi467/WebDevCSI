function nice(name,a,b) {
    console.log("Hey "+name+" you are nice")
    return a+b
}
result = nice("Somit",12,8)
console.log(result)

//arrow function

const func1 = (a)=>{
    console.log("i am an arrow function",a)
    return a
}
func1(45)
console.log(func1(34))

// strings in javascript

a="Somit"
console.log(a[2] , a.length)
console.log(`his name is ${a} `+a.replace("om",18),"\n" + a.slice(0,6));
a.trim() //to remove white space
console.log(a.concat("Tyagi"," 2nd Yr"))//to concatenate
//string is immutable in js as well so no changes are made by these function in orginal string
