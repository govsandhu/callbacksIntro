// The second argument/parameter is expected to be a function
var name = [];
var index = [];

function findWaldo(arr, found) {
 arr.forEach(function(item) {
  if (item === "Waldo") {
    name.push(item);
    found();

  }
      // console.log(typeof(item));
      // console.log(item);
 //     if (arr[i] === "Waldo") {
 //     name.push();
 //     index.push();
   })
 }
  // for (var i = 0; i < arr.length; i++) {
  //   if (arr[i] === "Waldo") {
  //     name.push(arr[i]);
  //     index.push([i]);
  //     found();   // execute callback
  //   }
  // }


function actionWhenFound() {
  console.log("Found " + name.toString() + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);