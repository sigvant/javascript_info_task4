// 5 > 4
// "apple" > "pineapple"
// "2" > "12"
// undefined == null
// undefined === null
// null == "\n0\n"
// null === +"\n0\n"

// my answers:

// 1 - true (both are evaluated as numbers)
// 2 - false (unicode p > a)
// 3 - true (as strings, 2 comes before 1, and they are compared char by char)
// 4 - true (as far as == goes, undefined is equal to undefined and null only)
// 5 - false (now it's false because the comparing is STRICT, which means no convertions')
// 6 - false (null equals zero only when compared, when equalized it's not (even if it is string zero)')
// 7 - false (read above even if it is string zero as number)

// if ("0") {
//   alert( 'Hello' );
// }

// will this string be shown? Yes, because any string that is not empty is considered truthy.

// let name = prompt("What is the official name of JavaScript?", "it is ECMAScript")
// if(name ==	 "ECMAScript"){
// 	console.log("Right!")
// } else {
// 	console.log("You don't know? It's ECMAScript")
// }

// let number = prompt('Type a number', 'it should be an integer')
// if(number == 0) {
// 	alert("0");
// } else if (number < 0) {
// 	alert("-1");
// } else {
// 	alert("1");
// }

// let result;

// if (a + b < 4) {
//   result = 'Below';
// } else {
//   result = 'Over';
// }

// rewrite this using ? operator:


// let a = 1;
// let b = 2;

// let result = ((a+b<4) ? 'Below' : 'Over')


// let message;

// if (login == 'Employee') {
//   message = 'Hello';
// } else if (login == 'Director') {
//   message = 'Greetings';
// } else if (login == '') {
//   message = 'No login';
// } else {
//   message = '';
// }

// rewrite this with ? operator:

// let message = (login == 'Employee') ? 'Hello' :
//  (login == 'Director') ? Greetings :
//   (login == '') ? 'No Login' :
//    '';

// let firstName = "";
// let lastName = "";
// let nickName = "SuperCoder";

// alert( firstName || lastName || nickName || "Anonymous"); // SuperCoder


// it can be used to short-circuit a system, because if several conditions are false before one that is true that is followed by falses, it will execute the truth one without even touching the 
// falses ahead of it

// TASKS CHAPTER LOGICAL OPERATOR

// what will the codes below output?

// alert(null || 2 || undefined); //2 - first truthy
// alert(alert(1) || 2 || alert(3));  //1 then 2

//the first OR evaluates the left operand
//alert (1). Which shows the message 1. The alert returns undefined. So or goes
//on to the second operand searching for a truthy value.
//the second operand is 2, truthy, so the execution is halted. 2 is returned
// and then shown by the outer alert.
// there will be no 3 because the evaluation does not reach alert(3)

// alert(1 && null && 2); //null - first falsy

// alert( alert(1) && alert(2)) ; //1 then undefined
// the call to alert returns undefined. (just shows a message, no meaningful return)
// because of that, && evaluates the left operand (outputs 1) and immediately stops,
// because undefined is a falsy value. and && looks for a falsy and returns it

// alert(null || 2 && 3 || 4); //3
// the precedence of AND && is higher than ||, so it executes first
// the result of 2 && 3 = 3, so the expression becomes:
// null || 3 || 4; now the result is the firs truthy value: 3


// let age = prompt("your age?", "should be a natural number");
// if(age >= 14 && age <= 90){
// 	alert("you look fine");
// } else {
// 	alert("you seem odd");
// }

// let age = prompt("your age (inside of 14 <> 90)?", "should be a natural number");
// if(!(age >= 14 && age <= 90){
// 	alert("you look fine");
// } else {
// 	alert("you seem odd");
// }

// let age = prompt("your age (out of 14 <> 90)?", "should be a natural number");
// if(age < 14 && age > 90){
// 	alert("you look fine");
// } else {
// 	alert("you seem odd");
// }

// which of these alerts are going to execute?
// what will the results of the expressions be inside if(...)?

// if(-1 || 0) alert('first');
// if(-1 && 0) alert('second');
// if(null || -1 && 1) alert('third');

//alert('first') will be executed. result of -1 || 0 = -1, truthy

//alert('second') will not be executed. -1 && 0 = 0, falsy

//alert('third') will be executed. operador && has higher precedence than||
// so -1 && 1 executes first, giving us the chain:
// null || -1 && 1 -> null || 1 -> 1, truthy

CHECK THE LOGIN

let login = prompt("Enter your login");

if(login == 'Admin') {
	let password = prompt("What is the password?");
		if(password == '' || password == null) {
			alert('Canceled');
		} else if (password == 'TheMaster'){
			alert('Welcome');
		} else { alert ("Wrong password")}
} else if (login == '' || login == null) {
	alert('Canceled');
} else { alert("I don't know you") }

