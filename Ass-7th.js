//^ Find the maximum number among the following
//  a=120
//  b=30
//  c=50

//ELSE IF
a = prompt("Enter a number 'a':");
b = prompt("Enter a number 'b':");
c = prompt("Enter a number 'c':");

if (a > b && a > c) {
  console.log("The Maximum Number is: " + a);
} else if (b > a && b > c) {
  console.log("The Maximum Number is: " + b);
} else if (c > a && c > b) {
  console.log("The Maximum Number is: " + c);
} else {
  console.log("a , b , c are equal");
}

//^SWITCH

// let a = 120;
// let b = 30;
// let c = 50;
// let max;
// switch (true) {
//   case a > b && a > c:
//     max = a;
//     break;
//   case b > a && b > c:
//     max = a;
//     break;
//   case c > b && c > a:
//     max = a;
//     break;
//   default:
//     console.log("ALl numbers are equal");
// }
// console.log("Greater number is " + max);
