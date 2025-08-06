// random name generator
function Generator(x,y,z){
    let num = Math.floor(Math.random()*3)
    if(num == 0)
    return x
    else if(num == 1)
    return y
    else
    return z
}

console.log("Generated Name is "+Generator("Crazy","Amazing","Fire")+" "+Generator("Engine","Food","Garment")+" "+Generator("Bros","Limited","Hub"))