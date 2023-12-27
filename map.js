// polyfill for map function

const arr = [1, 2, 3, 4, 5];

// default map function <- just for reference
const arr2 = arr.map((item, index) => {
  return item * 2;
});

// custom map function
Array.prototype.customMap = function(callBack) {
  const newArray = [];
  for (let index = 0; index < this.length; index++) {
    newArray.push(callBack(this[index], index, this));
  }
  return newArray;
};

// custom callback function
const multiplyByTwo = (item, index, array) => {
  return item * 2;
};

// calling custom map function
console.log(`Old Array -> [${arr}]`);
console.log(`New Array ->  [${arr.customMap(multiplyByTwo)}]`);