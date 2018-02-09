var output = document.getElementById("output");

var storage = 0;
var choice = "";
var operatorclick = false
var clickadded = false


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
     choice = 0;
}

function click1() {
    if (operatorclick == false){
        choice = choice +"1";
        output.innerHTML = choice;
    }


}

function click2() {
    if (operatorclick == false){
        choice = choice +"2";
        output.innerHTML = choice;
    }
}
function click3() {
    choice = 3;
}
function click4() {
    choice = 4;
}
function click5() {
    choice = 5;
}
function click6() {
    choice = 6;
}
function click7() {
    choice = 7;
}
function click8() {
    choice = 8;
}
function click9() {
    choice = 9;
}

function clickdeci() {
    choice = ".";
}

function add(){
    if (operatorclick == false){
        operatorclick = true;
        var temp = Number(choice);
        storage = storage +temp;
        choice = ""
    }

    else{
        var temp = Number(choice);

        storage = storage +temp;
        output.innerHTML = storage;
        choice = "";
    }

}

function sub(){
    if (operatorclick == false){
        operatorclick = true;
        choice = ""
    }

    var temp = Number(choice);

    storage = storage -temp;
    output.innerHTML = storage;
    choice = "";
}

function div(){
    storage = storage / choice;
}

function mult(){
    storage = storage * choice;
}

function equal(){
    storage = storage + choice;
}

function clear(){
    storage = 0;
}

