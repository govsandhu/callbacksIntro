// The second argument/parameter is expected to be a function
var name = [];
var index = [];

function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      name.push(arr[i]);
      index.push([i]);
      found();   // execute callback
    }
  }
}

function actionWhenFound() {
  console.log("Found " + name + " at index " + index + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);