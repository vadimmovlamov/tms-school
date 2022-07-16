/* Task one */
const messageHi = function(name){
    name = document.getElementById("strname").value;
    if (name === 'Oleg') {
        text = 'Hello, Oleg!';
    } else if (name === 'Adrian') {
        text = 'good evening, Adrian!';
    } else if (name === 'Vadim') {
        text = 'Hi, pretty boy! Do you remember me?';
    } else {
        text = 'Hello, hippopotamus =)';
    }
    document.getElementById("reportname").innerHTML = text;
}
                    /* Task two */
const hypTriangle = function(a,b){
    a = document.getElementById("anum").value;
    b = document.getElementById("bnum").value;
    text = 'Triangle hypotenuse is ' + Math.round(Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2)));
    document.getElementById("reporttrian").innerHTML = text;
}
/* Task three */
const minFun = function (a, b) {
    a = document.getElementById("numo").value;
    b = document.getElementById("numt").value;
    text = Math.min(a,b);
    document.getElementById("rort").innerHTML = text;
}


/* Task four */

const isEven = function(num){
    num = document.getElementById("enum").value;
    if (num % 2 === 0) {
        text = 'This number ' + num +  ' is Even';
    } else{
        text = 'This number ' + num +  ' is not Even';
    }
    document.getElementById("rprt").innerHTML = text;
}

/* Task five */
const strCharDel = function(){
    const dstr = document.getElementById("dstr").value;
    delChar = dstr.slice(1, dstr.length - 1);
    text = ("After delete: ") + delChar;
    document.getElementById("re").innerHTML = text;
}

/* Task six */

const strChar = function(){
    str = document.getElementById("wstr").value;
    lowerStr = str.toLowerCase();
    text = ("After change: ") + lowerStr[0].toUpperCase() + lowerStr.substring(1);
    document.getElementById("repor").innerHTML = text;
}

/* Task seven */

const someChar = function(){
    letter = document.getElementById("char").value;
    if(letter === letter.toUpperCase()){
        text = 'Оууу май, большая буква!';
    }else{
        text = 'Нет уж, маленькие буквы - скучно';
    }
    document.getElementById("repo").innerHTML = text;
}

/* Task eight */
const sumStr = function(){
    fstrOne = document.getElementById("fstr").value;
    sstrTwo = document.getElementById("sstr").value;
    text = fstrOne + ' ' + sstrTwo;
    document.getElementById("rep").innerHTML = text;
}

/* Task nine */

const func = function() {
    strOne = document.getElementById("str").value;
    numTwo = document.getElementById("num").value;
    if (strOne.length > numTwo) {
        text = "String is too long!";
    } else {
        text = strOne;
    }
    document.getElementById("report").innerHTML = text;
}