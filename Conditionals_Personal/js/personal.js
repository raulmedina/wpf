// JavaScript Document

/*

Student: Raul Medina
October 2, 2013
Version: 1.0A
Assignment: Conditionals
WPF-1


*/



var foot = 1;

var yard = ( foot * 3 );

var x = (foot * yard)*100;

var answer;





	answer=prompt("How many feet are in a 100 yard football field?");	

	if(answer == x)	

	{
	

	alert("You guessed the correct amount of feet, congratulations!");	

	}
	
	else if (answer < x )
	
	
	{
		alert("Sorry the number you entered was too low, please try again.");
		answer=prompt("How many feet are in a 100 yard football field?");	
		}

	if (answer == x) {
	
		alert("you are Awesome! You got it.");	
		
	
	}
	
	else {
		
		alert("I'm sorry you can't try again.");
		
		}
	
	

console.log(x);


	
