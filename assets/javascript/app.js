//write the code for the trivia game

var position = 0;
var maincontent;
var maincontent_status;
var question;
var choice;
var choices;
var chA;
var chB;
var chC;
var chD;
var answer = 0;
var time = 33;

var  questions = [
	["What is 100 + (-3)?", "103", "97", "-|-97|", "100", "B"],
	["what is 321kph to the nearest mpg?", "320mph", "199mph", "200mph", "nothing", "D"],
	["what can you use to purify mud puddle water?", "dove", "sant & peper", "clorox", "dont matter cause AINT drinking it", "C"],
	["The best instrument ever is?", "sousaphone", "drums", "saxophone", "vocal box", "D"]
];


// function ThirtyThreeSeconds(){
// 	counter = setInterval(decrement, 1000);
// }


// function countdown(){
// 	time--;
// 	$("#timer").innerHTML("<h3>You have "+time+" to complete this!!!</h3>");

// 	if (timer === 0){
// 		stop();
// 	}
//}


function _(x) {
	return document.getElementById(x);
}

//runs funciton to render questions and answers
function renderQuestion(){
	maincontent = _("maincontent");

	//runs question number and returns when test is completed
	if (position >= questions.length){
		maincontent.innerHTML = "<h2>You got " +answer+" of " +questions.length+" questions correct</h2>";
		_("maincontent_status").innerHTML = "Test Completed";
		position = 0;
		answer = 0;
		return false;
	}

	// sets positions of choices and questions
	_("maincontent_status").innerHTML = "Question " +(position+1)+ " of " +questions.length;
	question = questions[position][0];
	chA = questions[position][1];
	chB = questions[position][2];
	chC = questions[position][3];
	chD = questions[position][4];
	maincontent.innerHTML = "<h3>"+question+"</h3>";
	maincontent.innerHTML += "<input type='radio' name='choices' value='A'> "+chA+"<br>";
	maincontent.innerHTML += "<input type='radio' name='choices' value='B'> "+chB+"<br>";
	maincontent.innerHTML += "<input type='radio' name='choices' value='C'> "+chC+"<br>";
	maincontent.innerHTML += "<input type='radio' name='choices' value='D'> "+chD+"<br><br>";
    maincontent.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
}

//check answer
function checkAnswer() {
//render each question into the page and keep everything flowing in sequence
	choices = document.getElementsByName("choices");
	for (var i = 0; i < choices.legth; i++){
		if(choices[i].checked){
			choice = choices[i].value;
		}
		}

		if (choice == questions[position][5]){
			answer++;
		}
		position++;
		renderQuestion();
	}


	//function stop(){
	//clearInterval(counter);
//}


//	run();

	window.addEventListener("load", renderQuestion, false);

