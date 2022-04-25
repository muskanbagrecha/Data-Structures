Function.prototype.myCall = function(obj, ...args){
    obj.fn = this;
    obj.fn(...args)
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

obj.printName.myCall(newObj, "Delhi", "India")