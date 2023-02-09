let displayCleared = true; // flag to indicate if the display has been cleared
let displayNum = "0"; // current display number
let lastOp = ""; // last operator pressed
let currOp = ""; // current operator pressed
let num1 = ""; // first number
let num2 = ""; // second number
let total = ""; // result and display output
let display = document.getElementsByClassName('calc-numbers')[0]; // the calculator display element
const operators = {
    '+': function(a, b) { return parseFloat(a) + parseFloat(b) }, // add
    '-': function(a, b) { return parseFloat(a) - parseFloat(b) }, // subtract я знаю что тут минус но нужен плюс потому что строка с минусом идет перед парс флот!
    '*': function(a, b) { return parseFloat(a) * parseFloat(b) }, // multiply
    '/': function(a, b) { if (b === '0') {
    clearDisplay();
    display.innerHTML = "Error";   //доречи ця вся хуйня не пашет нихуя
    return;
    }
    return parseFloat(a) / parseFloat(b)
    }, // division
    };
function clearDisplay(){
    display.innerHTML = "0";
    displayCleared = true;
    total = "";
    lastOp = "";
    num1 = "";
    num2 = "";
}
function pressNum(num) {
    if (displayCleared){
      num1 = ''+ num;
      display.innerHTML = num1;
      displayCleared = false;
      console.log(num1, num2, lastOp);
    } else if (num2 === "" && lastOp === ""){
      num1 += num;
      display.innerHTML = num1;
      console.log(num1, num2, lastOp);
    } else if (num1!=="" && num2!=="" && lastOp ===""){
      num1 = operators[lastOp](num1, num2);    //это ебаниссимо тоже ниразу в консоле не видел не понятно,
      console.log(num1, num2, lastOp);
      display.innerHTML = num1;
    } else {
      num2 += num;
      console.log(num1, num2, lastOp);
      display.innerHTML = num2;
    }
  }
function pressOp (currOp) {
    num2 = "";
    //тут должно быть условие что если я жму оператор не нажав равно, то все считается автоматически и если нажал равно тоже нужно придумать логику
    
    displayCleared = false;
    lastOp = currOp; 
}
function equals() {
    // if (num2 === '') num2 = num1;  //эта дичь должна в случае 5+= показать 10
    if (num1 !== '' && num2 !== '' && lastOp !== '') {
      total = operators[lastOp](num1, num2);
      num1 = total;
      num1 ="";
    //   num2 = '';     //ну тут понятно, я обнуляю его перед тем как нажать оператор вернее при нажатии оператора чтоб не было казусов,  а вот ласт оп хз
    //   lastOp = '';
      console.log(num1, num2, lastOp);
    } else if (num1 !== '' && total !== '') {
      total = operators[lastOp](total, num1);
      num1 = total;
      console.log("hello kitty");
    }
    display.innerHTML = total;
    displayCleared = true;
  }