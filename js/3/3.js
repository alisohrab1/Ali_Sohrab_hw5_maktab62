let personData = [
  {
    uid: 1,
    firstName: "Ali",
    lastName: "Mahdavi",
  },
  {
    uid: 2,
    firstName: "Reza",
    lastName: "Shahmardan",
  },
  {
    uid: 3,
    firstName: "Hassan",
    lastName: "Qolami",
  },
  {
    uid: 4,
    firstName: "Morteza",
    lastName: "Hamedani",
  },
  {
    uid: 5,
    firstName: "Sina",
    lastName: "Hejazi",
  },
  {
    uid: 6,
    firstName: "Hadi",
    lastName: "Sadri",
  },
];

let additionalPersonData = [
  {
    uid: 3,
    position: "UI Designer",
    city: "Biarjmand",
  },
  {
    uid: 1,
    position: "Back-End Develope",
    city: "Taleqan",
  },
  {
    uid: 2,
    position: "Front-End Developer",
    city: "Behbahan",
  },
  {
    uid: 4,
    position: "Devops",
    city: "Shiraz",
  },
  {
    uid: 6,
    position: "Server Admin",
    city: "Tehran",
  },
  {
    uid: 5,
    position: "Product Manager",
    city: "Hamedan",
  },
];

// result ===> [{
//     uid: 1,
//     firstName: "Ali",
//     lastName: "Mahdavi",
//     position: "Back-End Develope",
//     city: "Taleqan"
// },
// {

// }, ...]
let result = [];

for (obj1 of personData) {
  for (obj2 of additionalPersonData) {
    if (obj1.uid === obj2.uid) {
      obj1 = Object.assign(obj1, obj2);
      result.push(obj1);
    }
  }
}

// console.log(result);
let myObj1 = {
  uid: 6,
  position: "Productdfvdfvdvfdfvdfvdvr",
  city: "Hamedan",
  something : 2,
};

let myObj2 = {
  position: "Product Manager",
  city: "Hamedan",
};

function read(arr) {
  for (let obj of arr) {
    console.log(obj);
  }
}

function create(obj) {
  if (Object.keys(obj).includes("uid")) {
    for (let element of result) {
      if (element.uid === obj.uid) {
        console.log("uid already available");
        break;
      } else {
        result.push(obj);
        result.sort(function (a, b) {
          return a.uid - b.uid;
        });
        break;
      }
    }
  } else {
    console.log("no uid");
  }
}

function update(obj) {
  if (Object.keys(obj).includes("uid")) {
    for (let element of result) {
      if (element.uid === obj.uid) {
        element = Object.assign(element, obj);
        return;
        // result.push(obj1);
      }
    }
    console.log("uid not available");
  } else {
    console.log("no uid");
  }
}

function del(uid) {
  for (let i = 0; i < result.length; i++) {
    if (result[i].uid === uid) {
      result.splice(i, 1);
      console.log("successfully removed the object");
      return;
    }
    
  }
  console.log("uid not available");
}

update(myObj1);
console.log(result);
del(6)
console.log(result);
