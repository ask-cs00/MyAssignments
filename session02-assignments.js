//oddoreven
function isOddOrEven(num){
   let result;
   result = (num%2==0)? console.log("number is even"):console.log("number is odd");
}
isOddOrEven(4);
isOddOrEven(121);
isOddOrEven(256);

//NumType
function numType(num){
   let result;
   result = (num>0)? console.log("number is positive"):((num != 0)? console.log("number is negative"):console.log("number is neutral"));
}
numType(10)
numType(-5)
numType(0)

//Conditional Statements - if-else
function launchBrowser(browserName)
{
  if(browserName ==="Chrome")
  {
    console.log("Launch chrome browser!");
  }else{
    console.log("Launch Edge browser!");
  }
}
launchBrowser("Chrome");

//Conditional Statements - runTests
function runTests(testType)
{
  switch(testType){
    case "sanity":
    console.log("running sanity tests");
    break;
    case "regression":
    console.log("running regression tests");
    break;
    default:
    console.log("running smoke tests");
  }}
 runTests("sanity");
 runTests("regression");
 runTests("EndtoEnd");
 runTests();

//Grade Calculation using switch
function gradeCalculation(score){
  switch(true){
    case (score>70 && score <80):
    console.log("Grade C");
    break;
    case (score>80 && score <90):
    console.log("Grade B");
    break;
    case (score>90):
    console.log("Grade A");
    break;
    default:
    console.log("Not qualified");
  }}
gradeCalculation(75);
gradeCalculation(85);
gradeCalculation(95);
gradeCalculation(65);
gradeCalculation();

//Function Declaration
function userProfile(name){
  console.log("Hello," + name +"!");
}
userProfile("Atchaya");

//Arrow function 
let output = num => num*num;
console.log("double of the num using arrow function : "+ output(5));

//Anonymous Function
let displayMsg = function(){
  console.log("This message is delayed by 2 seconds");
}

setTimeout(displayMsg,2000);

