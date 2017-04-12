$(document).ready(function() {
	$('#test').on('click', function (e) {
		console.log("event",event);
		console.log("this", $(this));
		console.log("this not jq", this);
	});
});

// this.a = 37
// console.log(window.a);


// var fubar = "42";

// function baz() {
// 	console.log("baz");
// 	bar();
// }

// function bar() {
// 	console.log("bar");
// 	foo();
// }

// function foo() {
// 	console.log("foo");
// 	var fubar = 13;
// 	console.log("this", this); //  foo
// 	console.log("fubar", this.fubar); // 13
// }

// baz();

var a = 3;

function foo() {
	console.log("this", this); // obj
	for (key in this) {
		console.log(this.key);
	} 
	console.log("a", this.monkey); // 2
}

var obj = {
	a: 2,
	monkey: foo
};

obj.monkey();

























