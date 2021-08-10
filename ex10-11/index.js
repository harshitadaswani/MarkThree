// ex10: List grocery items to buy 

// declaring an array
var groceryList = ["apple" , "banana" , "ladyfinger" , "potato" , "milk"];

// print the first, third, last item on the List
console.log(groceryList[0]);
console.log(groceryList[2]);
console.log(groceryList[4]);

// printing last item using different method
var arrayLength = groceryList.length;
console.log("Array Length is " + groceryList.length);
console.log(groceryList[groceryList.length - 1]);

// ex11: using for loop to print all the items
for(i = 0; i < groceryList.length; i++)
{
	console.log(i+1 + " " + groceryList[i]);
}
