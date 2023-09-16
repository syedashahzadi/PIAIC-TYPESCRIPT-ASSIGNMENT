"use strict";
//Q#1
//Personal Message: Store a person’s name in a variable, and print a message to that person. 
//Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
var userName = "hello";
var Message = "Now i want to learn advanced typrscript";
console.log(userName, Message);
//Q#2
//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var _Name = "rida zainab";
console.log(_Name.toUpperCase());
console.log(_Name.toLowerCase());
console.log(_Name.toString());
//Q#3
//Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. 
//Your output should look something like the following, including the quotation marks:
var Quote = "Anyone who has ever made anything importance was DISCIPLINCED";
var authorName = "Andrew Hendrixson";
console.log("Andrew Hendrixson said ", Quote);
//Q#4
//Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person.
// Then compose your message and store it in a new variable called message. Print your message.
var famousPerson = "Eleanor Roosevelt";
var famousQuote = "The future belong to those who believe in the beauty of their Dream";
var message = "famousPerson, famousQuote";
console.log(famousPerson, message);
//Q#5 
//Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once.
// Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white space//Stripping Names: Store a person’s name, and include some whitespace
// characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed.
// Then print the name after striping the white spaces.
var myName = "\t         rida zainab     \n";
console.log(myName);
var strippingName = myName.trim();
//console.log(myName.trim());
console.log("stripping name", strippingName);
//Q#6
//Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8.
// Be sure to enclose your operations in print statements to see the results.
var sum = 5 + 3;
console.log(sum);
var subsraction = 10 - 2;
console.log(subsraction);
var multiplication = 4 * 2;
console.log(multiplication);
var division = 16 / 2;
console.log(division);
//Q#7 You should create four lines that look like this:
//_____________________________________________
//console.log(5 + 3)
//_____________________________________________
//Your output should simply be four lines with the number 8 appearing once on each line.
var line1 = "___________________________";
var line2 = "___________________________";
var line3 = "___________________________";
var line4 = "___________________________";
console.log(5 + 3);
console.log(line1, 5 + 3);
console.log(line2, 5 + 3);
console.log(line3, 5 + 3);
console.log(line4, 5 + 3);
//Q#8
//Favorite Number: Store your favorite number in a variable. Then, using that variable,
// create a message that reveals your favorite number. Print that message.
//var favoriteNumber: number = 5
//favoriteNumber "My name is rida";
//console.log(favoriteNumber);
//Q#9
//Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. 
//If you don’t have anything specific to write because your programs are too simple at this point,
// just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
var num1 = 20;
var num2 = 2;
var result = num1 / num2;
// Divide 20/2
console.log(result);
var simpleProgram = "coding";
//Rida Zainab 05.09.2023
console.log(simpleProgram);
//Q#10
//Names: Store the names of a few of your friends in a array called names.
// Print each person’s name by accessing each element in the list, one at a time.
let friendsName = ["iqra", "rida", "ishmal", "sidra"];
console.log(friendsName[0]);
console.log(friendsName[1]);
console.log(friendsName[2]);
console.log(friendsName[3]);
//Q#11
//Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. 
//The text of each message should be the same,
//console.log([0],"have a great day");
for (let index = 0; index < friendsName.length; index++) {
    console.log(friendsName[index], "have a great day");
}
//Q#12Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples.
// Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”    
let favoriteTrans = ["car", "honda", "train"];
console.log(`i would like to own",${favoriteTrans[0]}`);
//Guest List: If you could invite anyone, living or deceased, to dinner, 
//who would you invite? Make a list that includes at least three people you’d like to invite to dinner. 
//Then use your list to print a message to each person, inviting them to dinner.
let inviting = ["hurain", "rutba", "rania"];
for (let index = 0; index < inviting.length; index++) {
    console.log("have a dinner at my place", inviting[index]);
}
//Changing Guest List: You just heard that one of your guests can’t make the dinner, 
//so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// rutba can't make dinner also add iqra  in place of rutba
//let add = inviting.splice(1,1 ,"Iqra")
console.log(inviting[1], " can't make dinner");
console.log(inviting);
//• Start with your program from Exercise 14. Add a print statement at the end of your program stating
// the name of the guest who can’t make it.
//console.log(inviting[1]," can't make dinner");
//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
console.log(inviting);
//Print a second set of invitation messages, one for each person who is still in your list.
let invitingMessage = ["hurain", "iqra", "rania"];
console.log("you will come", invitingMessage[2]);
//More Guests: You just found a bigger dinner table, so now more space is available. 
//Think of three more guests to invite to dinner. 
let add = invitingMessage.push("rida", "aliza", "jia");
console.log(invitingMessage);
