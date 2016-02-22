// Task01 - Write a code that returns any string value.
// For example, next code return a boolean value: 
// return false;
  //a*b+c*d+e=g
function task01(a, c, e, g) {
    var j = e - g;
    var dist = c*c - 4*j*a;
    var d = (((-1*c) + Math.sqrt(dist))/2*a);
    var q = (((-1*c) - Math.sqrt(dist))/2*a);
    return  (q,d);  
    
    // TODO: Write your code here
}
var result = task01(1,4,0,9/4)
console.log(result)