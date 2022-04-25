Function.prototype.myBind = function(obj, ...args){
    let methodToCall = this;
    return function(...args2){
        methodToCall.call(obj, ...args, ...args2)
    }
}

const obj = {
    name: "Muskan",
    printName(city, country){
        console.log(`Hi, ${this.name}. You are posted in ${city}, ${country}.`)
    }
}

const newObj = {
    name: "Athira"
}

const fn = obj.printName.myBind(newObj, "Delhi")
fn("India")