var array = [3, 6, 2, 56, 32, 5, 89, 32];
var largest = 0;
// Write your code below!
for (var i = 0; i < array.length; i++) {
   if (array[i] > largest) {
       largest = array[i];
       console.log("Hey we found a new largest: " + largest);
   }
   else {
       console.log("We're on something smaller: " + array[i]);
   }
    console.log("let me print i: " + i);
}





console.log(largest);