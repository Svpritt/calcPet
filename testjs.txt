// parseFloat - принимает строку а возращает десятичное с плавающей запятой то че надо) поидее 0.2+0.1 даст 0.3)

let display = document.getElementsByClassName('calc-numbers')[0];
let displayCleared = false; // был ли нажат оперант СЕ очищения
let currentOpp = ""; // последний нажатый оперант
let num1 = 0; // первая цифра
let num2 = 0; // вторая цифра
let total = ""; // значение тотал после выполнения операции в виде строки.
let lustNum = ""; // результат последней операции когда нум1 и нум2 пустые и нажато равно.
let lustOver = false; // говорит мне о том тчо ластНум пустой.

let operators = {
    '+': function(a, b) { return parseFloat(a) + parseFloat(b) }, // add
    '-': function(a, b) { return parseFloat(a) - parseFloat(b) }, // subtract
    '*': function(a, b) { return parseFloat(a) * parseFloat(b) }, // multiply
    '/': function(a, b) { return parseFloat(a) / parseFloat(b) }, // division
  };
function clearDisplay() {
    console.log(total + typeof(total)+' '+ parseFloat(total))
    display.innerHTML = "0";
    displayCleared = true;
    lustNum = "";
    lustOver = false;
    num1 = 0;
    num2 = 0;
   // runningTotal = 0;
    total = "";
  };
function pressNum(num) {
    if (displayCleared){
        total = ""+ num;
        displayCleared = false;
        console.log("1")
    } else {
        total = total + num;
        console.log("2")

    }
    display.innerHTML = total;
    if (lustOver) {
        num1 = lustNum;
        num2 = total + num;
        display.innerHTML = total;
        lustOver = false;
      }
}
function pressOp(opp) { // when you press an operator key

    displayCleared = false; // if the "CE" button has been pressed, forget about it
    if (lustOver) { // if equals has been pressed, prep for third (or higher) operation
        num1 = 0;
        num2 = 0;
        //display.innerHTML = "";
    } else { 
      num1 = total;
      num2 = 0;
    }
    currentOpp = opp;
    if (num1 === 0) { // assign last pressed number to num1 or num2
      num1 = total;
    } else {
      num2 = total;
    }
 
    total = ""; // clear screenTotal for next entry

  };
  function equals() { //when you press 'equals'
    if (num1 === 0) { // last number entered is assigned to either num1 or num2
      num1 = total;
    } else {
      num2 = total;
    }
    if (num1 !== 0 && num2 !== 0) { // if we have 2 numbers, prep for third (or higher) operation
      num1 = operators[currentOpp](num1, num2); // assign result of operation to num1
    }
    lustOver = true; // there is a number to carry over to another operation
    lustNum = num1; // that number is the value of num1
    display.innerHTML = parseFloat(num1); // display num1 on the screen (up to 5 decimals)
    num1 = 0; // clear num1 for next operation
    num2 = 0; // clear num2 for next operation
    total = ""; // clear screenTotal for next entry (but display still reads num1)
  };