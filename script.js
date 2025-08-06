// console.log("hello world");
// console.log("faulty calculator : ")
// c="Y" 
// while (c=="Y" || c=="y") {
//     let a = parseFloat(prompt("enter the first number :"));
//     let b= parseFloat(prompt("enter the second number"));
//     let fault = Math.random() <= 0.1
//     console.log(fault)
//     let task = prompt("enter the task to perform ( + , - , * , / ) : ")
//     if (fault==true){
//         if (task == '+'){
//             console.log(a-b)
//         }
//         else if (task == '-'){
//             console.log(a/b)
//         }
//         else if (task == '*'){
//             console.log(a+b)
//         }
//         else if (task == '/'){
//             console.log(a**b)
//         }
//     }
//     else{
//         if (task == '+'){
//             console.log(a+b)
//         }
//         else if (task == '-'){
//             console.log(a-b)
//         }
//         else if (task == '*'){
//             console.log(a*b)
//         }
//         else if (task == '/'){
//             console.log(a/b)
//         }
//     }
//     c = prompt("to continue or not (Y/N):")
// }
// console.log("exit")
//easy way
let obj={
    '+': '-',
    '-':'/',
    '*':'+',
    '/':'**'
}
let a = parseFloat(prompt("enter the first number :"));
let b= parseFloat(prompt("enter the second number"));
let task = prompt("enter the task to perform ( + , - , * , / ) : ")
let fault = Math.random() <= 0.1
if (fault==true){
    alert(`Result is ${eval(`${a} ${obj[task]} ${b}`)}`)
}
else{
    alert(`result is ${eval(`${a} ${task} ${b}`)}`)
}