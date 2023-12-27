// polyfill for forEach function

const arr = [1, 2, 3, 4, 5];

// default forEach function <- just for reference
arr.forEach((item, index) => {
  console.log(item, index);
});

// custom forEach function
Array.prototype.customForEach = function(callBack) {
  for (let index = 0; index < this.length; index++) {
    callBack(this[index], index, this);
  }
};

// custom callback function
const printElements = (item, index, array) => {
  console.log(`The element at index ${index} is ${item}`);
};

// calling custom forEach function
arr.customForEach(printElements);
