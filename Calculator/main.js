var output = document.getElementById("output");

var storage = 0;
var choice = "";
var operatorclick = false;
var clickadded = false;
var clicksub = false;
var deciclick = false;


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
    if (choice.length !== 0) {
        choice = choice +"0";
        output.innerHTML = choice;
    }

}

function click1() {

        choice = choice +"1";
        output.innerHTML = choice;



}

function click2() {

        choice = choice +"2";
        output.innerHTML = choice;

}
function click3() {
    choice = choice +"3";
    output.innerHTML = choice;
}
function click4() {
    choice = choice +"4";
    output.innerHTML = choice;
}
function click5() {
    choice = choice +"5";
    output.innerHTML = choice;
}
function click6() {
    choice = choice +"6";
    output.innerHTML = choice;
}
function click7() {
    choice = choice +"7";
    output.innerHTML = choice;
}
function click8() {
    choice = choice +"8";
    output.innerHTML = choice;
}
function click9() {
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
    if (operatorclick == false){
        operatorclick = true;
        var temp = Number(choice);
        storage = storage +temp;
        choice = ""
        clickadded = true;
    }

    else{

        if(clickadded == true) {
            var temp = Number(choice);

            storage = storage +temp;
            output.innerHTML = storage;
            choice = "";
            clickadded = true;
            clicksub = false;
        }
        else if (clicksub == true){
            var temp = Number(choice);

            storage = storage -temp;
            output.innerHTML = storage;
            choice = "";
            clickadded = true;
            clicksub = false;
        }


    }

}

function sub(){
    if (operatorclick == false){
        operatorclick = true;
        var temp = Number(choice);
        storage = storage +temp;
        choice = ""
        clicksub = true;

    }
    else {
        if (clickadded == true) {
            var temp = Number(choice);

            storage = storage +temp;
            output.innerHTML = storage;
            choice = "";
            clicksub = true;
            clickadded = false;
        }
        else if (clicksub == true) {
            var temp = Number(choice);

            storage = storage -temp;
            output.innerHTML = storage;
            choice = "";
            clicksub = true;
            clickadded = false;
        }
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
    output.innerHTML =0
    choice = "";
    storage = 0;
}

