/** Write an ES2015 Version */
function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function(num) {
      return num % 2 === 0
    });
}

//ES2015 Version/
const filterOutOdds = (...arguments) => arguments.filter(v => v % 2 === 0)

/** Write a function called findMin that accepts a variable number of arguments and returns the smallest argument. Make sure to do this using the rest and spread operator */

const findMin = (...nums) => Math.min(...nums)

/** Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object. */

const mergeObjects = (objectOne, objectTwo) => ({...objectOne, ...objectTwo})

/** Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of additional arguments doubled. */

const doubleAndReturnArgs = (arr, ...nums) => [...arr, ...nums.map(v => v * 2)]

/** remove a random element in the items array and return a new array without that item. */

const removeRandom = items => {
    let idx = Math.floor(Math.random() * items.length);
    return [...items.slice(0, idx), ...items.slice(idx + 1)];
}

/** Return a new array with every item in array1 and array2. */

const extend = (arr1, arr2) => [...arr1, ...arr2]

/** Return a new object with all the keys and values from obj and a new key/value pair */

const addKeyVal = (obj, key, val) => {
    let newObj = { ...obj }
    newObj[key] = val;
    return newObj;
}

/** Return a new object with a key removed. */

const removeKey = (obj, key) => {
    let newObj = { ...obj }
    delete newObj[key]
    return newObj;
}

/** Combine two objects and return a new object. */

const combine = (object1, object2) => {
    return {...object1, ...object2}
}

/** Return a new object with a modified key and value. */

const update = (obj, key, val) => {
    let newObj = { ...obj }
    newObj[key] = val;
    return newObj;
}