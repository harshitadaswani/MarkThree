// ex12: create an object

// declaring object01
var drGrey =
{
	speciality: "General Surgery",
	husband: "Derek Shepherd",
	realname: "Ellen Pompeo",
	intelligence: "90",
}

var drYang =
{
	speciality: "Cardio Surgery",
	husband: "Preston Burke",
	realname: "Sandra Oh",
	intelligence: "90",
}

var dr = [drGrey , drYang];
for( i = 0; i < dr.length; i++)
{
	var currDr = dr[i];
	console.log(currDr.speciality);
	console.log(currDr.husband);
	console.log(currDr.realname);
	console.log(currDr.intelligence);
}

// comparing intelligence
console.log(drGrey.intelligence < drYang.intelligence);
// will return value true/false
