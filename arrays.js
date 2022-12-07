var shirtSizes = ["Small", "Medium", "Large", "Extra Large"];
//This line of code calls the pop method of shirtSizes and will remove the last element which in this case 
// is a Extra Large
shirtSizes.pop();
console.log(shirtSizes);

var summerTemps = [ 92, 88, 94, 100 ]; 
// This line of code calls the shift function on summerTemps which will remove the the element in the
//first  element in the array.
summerTemps.shift();
console.log(summerTemps);

var seniorGrades = [true, false, false, false];
// This line of code calls the reverse function on seniorGrades which reverses the order
// of the elements in the array.
seniorGrades.reverse();
console.log(seniorGrades);


//[Intentionally open-ended] Demonstrate your understanding of index positions in this file. You can write an explanation, provide some examples with the Arrays you’ve created, or anything else.
//Commit your work.

//Some functions help with inserting elements and removing elements this is done by using call them by index number.
//For example the code below will call the function unshift on summerTemps and will add on 78 in the 0 index positions
summerTemps.unshift(78)
console.log (summerTemps)

//Another example would be calling the splice function on summerTemps. For the below line of code we would
// insert at the second index element in the array which in this case is 94 and insert 2 elements into 
//the array 90 and 70. 90 and 74 would then be in the third and fourth index position of the array. 
//94 and 100 would then me fifth and sixth index position consecutively. 


summerTemps.splice(2, 0, 90, 74)
console.log(summerTemps)

