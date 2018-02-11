var output = document.getElementById("output");

var storage = 0;
var choice = "";
var operatorclick = false;
var clickadded = false;
var clicksub = false;
var clickdiv = false;
var deciclick = false;
var multiclick = false;
var equalclick = false;
var equalchoice = 0;


var btnclear =document.getElementById("btnclear");
var btn0 =document.getElementById("btn0");
var btn1 =document.getElementById("btn1");
var btn2 =document.getElementById("btn2");
var btn3 =document.getElementById("btn3");
var btn4 =document.getElementById("btn4");
var btn5 =document.getElementById("btn5");
var btn6 =document.getElementById("btn6");
var btn7 =document.getElementById("btn7");
var btn8 =document.getElementById("btn8");
var btn9 =document.getElementById("btn9");
var btnadd =document.getElementById("btnadd");
var btnmult =document.getElementById("btnmult");
var btndiv =document.getElementById("btndiv");
var btnequal =document.getElementById("btnequal");
var btnsub =document.getElementById("btnsub");
var btndec =document.getElementById("btndec");

btnclear.addEventListener("click",clear);
btn0.addEventListener("click",click0);
btn1.addEventListener("click",click1);
btn2.addEventListener("click",click2);
btn3.addEventListener("click",click3);
btn4.addEventListener("click",click4);
btn5.addEventListener("click",click5);
btn6.addEventListener("click",click6);
btn7.addEventListener("click",click7);
btn8.addEventListener("click",click8);
btn9.addEventListener("click",click9);
btnadd.addEventListener("click",add);
btnmult.addEventListener("click",mult);
btndiv.addEventListener("click",div);
btnequal.addEventListener("click",equal);
btnsub.addEventListener("click",sub);
btndec.addEventListener("click",clickdeci);


function click0() {
    if(equalclick == true) {
        storage = 0;
    }
    if (choice.length !== 0) {
        choice = choice +"0";
        output.innerHTML = choice;
    }
}

function click1() {
    if(equalclick == true){
        storage = 0;
    }
        choice = choice +"1";
        output.innerHTML = choice;
}

function click2() {
    if(equalclick == true){
        storage = 0;
    }
        choice = choice +"2";
        output.innerHTML = choice;

}
function click3() {
    if(equalclick == true){
        storage = 0;
}
    choice = choice +"3";
    output.innerHTML = choice;
}
function click4() {
    if(equalclick == true){

        storage = 0;
}
    choice = choice +"4";
    output.innerHTML = choice;
}
function click5() {
    if(equalclick == true){
        storage = 0;
}
    choice = choice +"5";
    output.innerHTML = choice;
}
function click6() {
    if(equalclick == true){
        storage = 0;
}
    choice = choice +"6";
    output.innerHTML = choice;
}
function click7() {
    if(equalclick == true){
        storage = 0;
}
    choice = choice +"7";
    output.innerHTML = choice;
}
function click8() {
    if(equalclick == true){
        storage = 0;
}
    choice = choice +"8";
    output.innerHTML = choice;
}
function click9() {
    if(equalclick == true){
        storage = 0;
}
    choice = choice +"9";
    output.innerHTML = choice;
}

function clickdeci() {
    if (deciclick == false){
        choice = choice +".";
        output.innerHTML = choice;
        deciclick = true;
    }



}

function add(){
    if (equalclick = true){
        equalclick = false;
    }
    if (operatorclick == false){
        operatorclick = true;
        var temp = Number(choice);
        storage = storage +temp;
        choice = ""
        clickadded = true;
        deciclick = false;
        equalclick = false;
    }

    else{

        if(clickadded == true) {
            var temp = Number(choice);

            storage = storage +temp;
            output.innerHTML = storage;
            choice = "";
            clickadded = true;
            clicksub = false;
            deciclick = false;
            clickdiv = false;
            multiclick = false;
        }
        else if (clicksub == true){
            var temp = Number(choice);

            storage = storage -temp;
            output.innerHTML = storage;
            choice = "";
            clickadded = true;
            clicksub = false;
            deciclick = false;
            clickdiv = false;
            multiclick = false;
        }
        else if (clickdiv == true) {
            var temp = Number(choice);

            storage = storage / temp;
            output.innerHTML = storage;
            choice = "";
            clickadded = true;
            clicksub = false;
            deciclick = false;
            clickdiv = false;
            multiclick = false;
        }
        else if (multiclick == true) {
            var temp = Number(choice);

            storage = storage * temp;
            output.innerHTML = storage;
            choice = "";
            clickadded = true;
            multiclick = false;
            clickdiv = false;
            clicksub = false;
            deciclick = false;
        }
    }

}

function sub(){
    if (equalclick = true){
        equalclick = false;
    }
    if (operatorclick == false){
        operatorclick = true;
        var temp = Number(choice);
        storage = storage +temp;
        choice = ""
        clicksub = true;
        deciclick = false;
        equalclick = false;

    }
    else {
        if (clickadded == true) {
            var temp = Number(choice);

            storage = storage +temp;
            output.innerHTML = storage;
            choice = "";
            clicksub = true;
            clickadded = false;
            deciclick = false;
            clickdiv = false;
            multiclick = false;
        }
        else if (clicksub == true) {
            var temp = Number(choice);

            storage = storage -temp;
            output.innerHTML = storage;
            choice = "";
            clicksub = true;
            clickadded = false;
            deciclick = false;
            clickdiv = false;
            multiclick = false;
        }
        else if (clickdiv == true) {
            var temp = Number(choice);

            storage = storage / temp;
            output.innerHTML = storage;
            choice = "";
            clicksub = true;
            clickadded = false;
            deciclick = false;
            clickdiv = false;
            multiclick = false;
        }
        else if (multiclick == true) {
            var temp = Number(choice);

            storage = storage * temp;
            output.innerHTML = storage;
            choice = "";
            clicksub = true;
            multiclick = false;
            clickdiv = false;
            clickadded = false;
            deciclick = false;
        }
    }


}

function div(){
    if (equalclick = true){
        equalclick = false;
    }
    if (operatorclick == false){
        operatorclick = true;
        var temp = Number(choice);
        storage = storage + temp;
        choice = ""
        clickdiv = true;
        deciclick = false;
        equalclick = false;

    }
    else {
        if (clickadded == true) {
            var temp = Number(choice);

            storage = storage + temp;
            output.innerHTML = storage;
            choice = "";
            clickdiv = true;
            clicksub = false;
            clickadded = false;
            deciclick = false;
            multiclick = false;
        }
        else if (clicksub == true) {
            var temp = Number(choice);

            storage = storage -temp;
            output.innerHTML = storage;
            choice = "";
            clickdiv = true;
            clicksub = false;
            clickadded = false;
            deciclick = false;
        }
        else if (clickdiv == true) {
            var temp = Number(choice);

            storage = storage / temp;
            output.innerHTML = storage;
            choice = "";
            clickdiv = true;
            clicksub = false;
            clickadded = false;
            deciclick = false;
        }
        else if (multiclick == true) {
            var temp = Number(choice);

            storage = storage * temp;
            output.innerHTML = storage;
            choice = "";
            clickdiv = true;
            multiclick = false;
            clicksub = false;
            clickadded = false;
            deciclick = false;
        }
    }
}

function mult(){
    if (equalclick = true){
        equalclick = false;
    }
    if (operatorclick == false){
        operatorclick = true;
        var temp = Number(choice);
        storage = storage +temp;
        choice = ""
        multiclick = true;
        deciclick = false;
        equalclick = false;

    }
    else {
        if (clickadded == true) {
            var temp = Number(choice);

            storage = storage + temp;
            output.innerHTML = storage;
            choice = "";
            multiclick = true;
            clickdiv = false;
            clicksub = false;
            clickadded = false;
            deciclick = false;
        }
        else if (clicksub == true) {
            var temp = Number(choice);

            storage = storage -temp;
            output.innerHTML = storage;
            choice = "";
            multiclick = true;
            clickdiv = false;
            clicksub = false;
            clickadded = false;
            deciclick = false;
        }
        else if (clickdiv == true) {
            var temp = Number(choice);

            storage = storage / temp;
            output.innerHTML = storage;
            choice = "";
            multiclick = true;
            clickdiv = false;
            clicksub = false;
            clickadded = false;
            deciclick = false;
        }
        else if (multiclick == true) {
            var temp = Number(choice);

            storage = storage * temp;
            output.innerHTML = storage;
            choice = "";
            multiclick = true;
            clickdiv = false;
            clicksub = false;
            clickadded = false;
            deciclick = false;
        }
    }
}

function equal(){
    if(clickadded == true && clicksub == false && multiclick == false && clickdiv == false) {
        if (equalclick == false) {
            var temp = Number(choice);
            storage = storage +temp;
            equalchoice = temp;
        }
        else {
            storage = storage + equalchoice;
        }
        output.innerHTML = storage;
        choice = "";
        clickadded = true;
        clicksub = false;
        deciclick = false;
        clickdiv = false;
        multiclick = false;
        equalclick = true;
    }
    else if (clicksub == true) {
        if (equalclick == false) {
            var temp = Number(choice);
            storage = storage -temp;
            equalchoice = temp;
        }
        else {
            storage = storage - equalchoice;
        }
        output.innerHTML = storage;
        choice = "";
        clicksub = true;
        clickadded = true;
        deciclick = false;
        clickdiv = false;
        multiclick = false;
        equalclick = true;
    }
    else if (multiclick == true) {
        if (equalclick == false) {
            var temp = Number(choice);
            storage = storage * temp;
            equalchoice = temp;
        }
        else {
            storage = storage * equalchoice;
        }
        output.innerHTML = storage;
        choice = "";
        clicksub = false;
        clickadded = true;
        deciclick = false;
        clickdiv = false;
        multiclick = true;
        equalclick = true;
    }
    else if (clickdiv == true) {
        if (equalclick == false) {
            var temp = Number(choice);
            storage = storage / temp;
            equalchoice = temp;
        }
        else {
            storage = storage / equalchoice;
        }
        output.innerHTML = storage;
        choice = "";
        clicksub = false;
        clickadded = true;
        deciclick = false;
        clickdiv = true;
        multiclick = false;
        equalclick = true;
    }
}

function clear(){
    output.innerHTML =0;
    choice = "";
    storage = 0;
    operatorclick = false;
    deciclick = false;
    clickadded = false;
    clickdiv = false;
    clicksub = false;
    multiclick = false;
}

