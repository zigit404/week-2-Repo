// create a variable called speedLimit and another called mySpeed
// set their values to numbers between 1 and 100
var speedLimit = 30;
var mySpeed = 60;

// using a conditional, determine if mySpeed is greater than the speedLimit
// if true, print "Slow Down! Mom is mad!" to the console
// if mySpeed is equal to the speedLimit, print "Everyone is happy!" to the console
// if mySpeed is less than the speedLimit, print "Speed up! Dad is mad!"
if (mySpeed > speedLimit) {
    console.log ("slow down, mom is mad");
}   else if (mySpeed == speedLimit) {
    console.log ("everyone is happy");
}   else{ 
     console.log ("speed up, dad is mad");
}
// create two variables, one named alarmSet, the other openDoor
// set them to a boolean value
var alarmSet = true;
var openDoor = false; 

// using a conditional, determine if alarm is set. 
// if alarm is set and door is set to open, print "Sound Alarm!" to the console
// otherwise, print "Everything is fine." to the console.
if (alarmSet && openDoor) {
    console.log = ("sound alarm")
} else {
    console.log ("everything is fine")
}


// create two variables, username and password
// create a conditional, if the username is "Tommy123" and the password is "12345"
// or the username is "Timmy456" and the password is "6789", print "Admin Login Successful" to the console
// otherwise, print "Admin Access Denied"
var username;
var password;

if ((username == "tommy123" && password == "12345") || (username == "timmy456" && password == "6789")){
    console.log ("admine login good"); }
    else {
        console.log ("admin access denied")
    }



// write code that will set the value of studentClass based on studentGrade
// studentGrade will be K-12
// K-6 will be Elementary
// 7-8 will be Middle
// 9 will be Freshman, 10 Sophomore, 11 Junior, 12 Senior
// Anything other than these values will return "Error" to the console

var studentClass;
var studentGrade = 10;
switch (studentGrade){
case "K":
case 1:
case 2:
case 3:
case 4:
case 5:
case 6:
    studentClass = "elementary";
    break;
    case 7:
    case 8:
    studentClass = "middle"
    break;
    case 9:
        studentClass ="freshman"
        break;
    case 10:
        studentClass = "sophomore"
        break;
    case 11: 
    studentClass ="junior"
    break;
    case 12:
        studentClass = "senior"
        break;
    default:
    console.log ("error") 
}
console.log (studentClass);



// write a for loop that will iterate backwards from 10 to -10
for (let i = 10; i >= -10; i--) {
    console.log(i);
}


// write a do/while loop that prints 1 through 50
let i = 1
do {  i++;
    console.log (i);
} while (i<= 50); 


// edit the previous do/while loop so that it prints the remainder when the loop number is divided by 4

do { 
    console.log (i % 4);
    i++; 
} while (i <= 50); 

// Someone messed up the following for loop
// fix the following infinite loop, uncomment to test

   // for(let i = 11; i > 10; i++){
//  console.log(i); }

for (i = 12; i < 100; i++) {
    console.log (i);
    
}