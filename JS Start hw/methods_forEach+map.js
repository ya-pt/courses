var data = [1, 2, 3, 4, 5];

var result = data.map((value) => value * value);

result.forEach((e) => console.log(e));

// __________________________________________forEach() example
// Return value - undefined

chars = ["Hello", "world!!!"];

var retVal = chars.forEach(function (word) {
  console.log("Saving to db: " + word);
});

console.log(retVal); //undefined

// __________________________________________map() example
// Return value - new array with transformed elements, leaving back original array unchanged.

chars = ["Hello", "world!!!"];

var lengths = chars.map(function (word) {
  return word.length;
});

console.log(lengths); //[5,8]