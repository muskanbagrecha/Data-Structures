Function.prototype.myApply = function (obj, args) {
  obj.fn = this;
  if(!Array.isArray(args))
  {
      throw Error("Please supply arguments in array!")
  }
  obj.fn(...args);
};

const obj = {
  name: "Muskan",
  printName(city, country) {
    console.log(`Hi, ${this.name}. You are posted in ${city}, ${country}.`);
  },
};

const newObj = {
  name: "Athira",
};

obj.printName.myApply(newObj, "Delhi", "India", "Safd");
