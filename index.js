let displayCleared = true; // flag to indicate if the display has been cleared
let currOp = ""; // current operator pressed
let total = ""; // result and display output
let display = document.getElementsByClassName('calc-numbers')[0]; // the calculator display element
    const ops = {
        '+': function(aa, bb) { return aa + bb }, // сложение
        '-': function(aa, bb) { return aa - bb }, // вычитание 
        '*': function(aa, bb) { return aa * bb }, // multiply
        '/': function(aa, bb) { return aa / bb }, // division
        };
const command = {
    a: undefined,
    b: undefined,
    is_executed: false,
    operation:  function (aa, bb){
       
      return aa;
    },
    execute: function() {
        this.is_executed = true;
        if (this.b === undefined) {
            this.b = this.a;
        }
        total = this.operation(this.a, this.b);
        this.a = total;
        return total;
    },
    add_num: function (src, num){
        if (src === undefined){
            return num;
        }
        return src * 10 + num;
    },
    add_a_num: function (num) {
        this.a = this.add_num(this.a, num);
    },
    add_b_num: function (num) {
        this.b = this.add_num(this.b, num);
    }
};

function clearDisplay(){
    command.a = undefined;
    command.b = undefined;
    command.operation = (aa, bb,) => aa;
    command.is_executed = false;
    display.innerHTML = "0";
    displayCleared = true;
    total = "";
    currOp = "";
}

function equals() {
    total = command.execute();
    display.innerHTML = total;
    displayCleared = true;
  }
function pressNum(num) {
  if (displayCleared && command.is_executed) {  // дописал else if вместо if
    command.is_executed = false;
    command.a = 0;
    command.b = 0;
}  
  if (displayCleared) {
        command.add_a_num(num);
        display.innerHTML = command.a;
    } 
     else {
        command.add_b_num(num);
        display.innerHTML = command.b;
    }
  }
function pressOp (currOp) {
    if (displayCleared && command.is_executed) {
        command.is_executed = false;
        command.b = 0;
    }
    if (displayCleared === false && command.is_executed === false) { //если дисплей не пуст и результат вычислений пуст то
        equals();
        displayCleared = false;
        command.is_executed = false;
        command.b = 0;
    }
    displayCleared = false;
    command.operation = ops[currOp];
    if (command.is_executed === true) {
        total = command.execute();
        display.innerHTML = total;
    }
} 



