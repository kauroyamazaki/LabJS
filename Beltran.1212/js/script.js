var num1, num2, operator;

var result = document.getElementById("result");



function add(){

    operator = "+";

    num1 = parseFloat(document.getElementById("Numbers").value);

    document.getElementById("Numbers").value = "";

}



function minus(){

    operator = "-";

    num1 = parseFloat(document.getElementById("Numbers").value);

    document.getElementById("Numbers").value = "";

}



function multiply(){

    operator = "*";

    num1 = parseFloat(document.getElementById("Numbers").value);

    document.getElementById("Numbers").value = "";

}



function divide(){

    operator = "/";

    num1 = parseFloat(document.getElementById("Numbers").value);

    document.getElementById("Numbers").value = "";

}



function equals(){

    num2 = parseFloat(document.getElementById("Numbers").value);

    var total;

    if(operator === "+"){

        total = num1 + num2;

    }

    else if(operator === "-"){

        total = num1 - num2;

    }

    else if(operator === "*"){

        total = num1 * num2;

    }

    else if(operator === "/"){

        total = num1 / num2;

    }

    document.getElementById("result").innerHTML = total;
  

}