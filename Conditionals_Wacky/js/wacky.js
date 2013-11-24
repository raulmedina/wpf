// JavaScript Document

/*

Student: Raul Medina
October 2, 2013
Version: 1.0A
Assignment: 
WPF-1


*/


var speedLimit =  45;

var speedingTicket = 300;

var milesOverSpeed = 20;

var x = speedingTicket / milesOverSpeed;

var answer;


 answer=prompt("If you are ticketed $300 for speeding  at 65mph in a 45mph zone, what is the cost per mile over the speed limit?");


if (answer == x)

{
	
	alert("You guessed the correct cost per mile, nice job!");
	
		
		
		
		
	} else {
		

		alert("You guessed incorrectly again, sorry.");
	
	}
	
 answer=prompt("try again..");
 
 	if (answer == x){
		
		alert("You guessed it..");
		
		
	}
	
	else{
		
		alert("Sorry, you guessed wrong again..");
		
		}

console.log(x);


