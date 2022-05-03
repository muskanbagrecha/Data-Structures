const objEqualityChecker = (obj1, obj2) => {
  if (!obj1 || !obj2) {
    return;
  }
  const propsA = Object.getOwnPropertyNames(obj1);
  const propsB = Object.getOwnPropertyNames(obj2);
  if (propsA.length !== propsB.length) {
    return false;
  }
  for (let i = 0; i < propsA.length; i++) {
    let prop = propsA[i];
    if (typeof obj1[prop] !== typeof obj2[prop]) {
      return false;
    }
    if (typeof obj1[prop] === "object") {
      console.log(obj1[prop], obj2[prop]);
      if (!objEqualityChecker(obj1[prop], obj2[prop])) {
        return false;
      }
    } else if (obj1[prop] !== obj2[prop]) {
      return false;
    }
  }
  return true;
};

const obj1 = {
  name: "Muskan",
  employeeDetails: {
    SSN: 101,
    experience: "3months",
  },
};

const obj2 = {
  name: "Muskan",
  employeeDetails: {
    SSN: 101,
    experience: "3months",
  },
};

const obj3 = {
  name: "Adi",
  employeeDetails: {
    SSN: 101,
    experience: "5months",
  },
};

const obj4 = {
    age: NaN
}

const obj5 = {
    age: NaN
}

console.log(objEqualityChecker(obj1, obj2));

console.log(objEqualityChecker(obj1, obj3));

console.log(objEqualityChecker(obj4, obj5))

//limitations: NaN === NaN gives false.