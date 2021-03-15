// Q1
function func1Q() {
    var input1Q = document.getElementById("input1Q").value;
    var answer1Q = document.getElementById("answer1Q");
    var error1Q = document.getElementById("error1Q");

    var letterDecision = input1Q.charCodeAt(0);

    if (letterDecision >= 65 && letterDecision <= 90) {
        answer1Q.innerHTML = input1Q + " is UPPERCASE";
        error1Q.innerHTML = "";
    } 
    else if (letterDecision >= 97 && letterDecision <= 122){
        answer1Q.innerHTML = input1Q + " is lowercase";
        error1Q.innerHTML = "";
    }
    else{
        error1Q.innerHTML = input1Q + " is not an Alphabet";
        answer1Q.innerHTML = "";
    }
}

// Q2
function func2Q() {
    var input2Q = document.getElementById("input2Q").value;
    var dayDecision = input2Q -1;
    var answer2Q = document.getElementById("answer2Q");
    var daysInWeek = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
    ];
    if (input2Q >=0 && dayDecision <=5) {
        answer2Q.innerHTML = "Week Day is : " + daysInWeek[input2Q];        
        error2Q.innerHTML = "";
    }
    else{
        error2Q.innerHTML = input2Q + " is not b/w 0 and 6";
        answer2Q.innerHTML = "";        
    }


}

// Q3
function func3Q() {
    var input3Q = parseInt(document.getElementById("input3Q").value);
    var answer3Q = document.getElementById("answer3Q");
    var error3Q = document.getElementById("error3Q");

    // var monthList = ["January","Febrary","March","April","May","June","July","August","September","October","November","December",

    switch (input3Q) {
        case 1:
            answer3Q.innerHTML = "Month is january and it Has 31 Days";
            error3Q.innerHTML = "";
            break;

        case 2:
            answer3Q.innerHTML = "Month is February and it Has 28 Days";
            error3Q.innerHTML = "";
            break;
        case 3:
            answer3Q.innerHTML = "Month is March and it Has 31 Days";
            error3Q.innerHTML = "";
            break;
        case 4:
            answer3Q.innerHTML = "Month is April and it Has 30 Days";
            error3Q.innerHTML = "";
            break;
        case 5:
            answer3Q.innerHTML = "Month is May and it Has 31 Days";
            error3Q.innerHTML = "";
            break;
        case 6:
            answer3Q.innerHTML = "Month is June and it Has 30 Days";
            error3Q.innerHTML = "";
            break;
        case 7:
            answer3Q.innerHTML = "Month is July and it Has 31 Days";
            error3Q.innerHTML = "";
            break;
        case 8:
            answer3Q.innerHTML = "Month is August and it Has 31 Days";
            error3Q.innerHTML = "";
            break;
        case 9:
            answer3Q.innerHTML = "Month is September and it Has 30 Days";
            error3Q.innerHTML = "";
            break;
        case 10:
            answer3Q.innerHTML = "Month is October and it Has 31 Days";
            error3Q.innerHTML = "";
            break;
        case 11:
            answer3Q.innerHTML = "Month is November and it Has 30 Days";
            error3Q.innerHTML = "";
            break;
        case 12:
            answer3Q.innerHTML = "Month is December and it Has 31 Days";
            error3Q.innerHTML = "";
            break;
        default:
            error3Q.innerHTML = "**Enter a Number b/w 1 & 12";
            answer3Q.innerHTML = "";
    }
}

// Q4
function func4Q() {
    var input4Q = document.getElementById("input4Q").value;
    var answer4Q = document.getElementById("answer4Q");
     
    var notes500 = input4Q / 500;
    var notes1000 = input4Q / 1000;
    if (input4Q % 1000 === 0) {
        answer4Q.innerHTML = "It will have " + notes500 + " Notes of 500 & " + notes1000 + " Notes of 1000";        
    }
    else{
        answer4Q.innerHTML = "Error";
    }

}
// Q5 && Q6
function func5Q() {
    var inputi5Q = parseInt(document.getElementById("inputi5Q").value);
    var inputii5Q = parseInt(document.getElementById("inputii5Q").value);
    var inputiii5Q = parseInt(document.getElementById("inputiii5Q").value);
    var answer5Q = document.getElementById("answer5Q");
     
    var triangle = inputi5Q + inputii5Q + inputiii5Q;
    if (triangle === 180) {
        answer5Q.innerHTML = "Triangle is Valid";        
    }
    else{
        answer5Q.innerHTML = "Triangle isn't Valid";        
    }

}
// Q7
function func7Q() {
    var inputi7Q = parseInt(document.getElementById("inputi7Q").value);
    var inputii7Q = parseInt(document.getElementById("inputii7Q").value);
    var inputiii7Q = parseInt(document.getElementById("inputiii7Q").value);
    var answer7Q = document.getElementById("answer7Q");
    
    if (inputi7Q === inputii7Q && inputii7Q === inputiii7Q) {
        answer7Q.innerHTML = "Triangle is Equilateral"        
    }
    else if (inputi7Q === inputii7Q || inputi7Q === inputiii7Q || inputii7Q === inputiii7Q) {
        answer7Q.innerHTML = "Triangle is Isosceles";       
    }
    else{
        answer7Q.innerHTML = "Triangle is Scalene";
    }

}

// Q8
function func8Q() {
    var inputi8Q = parseInt(document.getElementById("inputi8Q").value);
    var inputii8Q = parseInt(document.getElementById("inputii8Q").value);
    var inputiii8Q = parseInt(document.getElementById("inputiii8Q").value);
    var answer8Q = document.getElementById("answer8Q");

    var quadraticInner = inputii8Q * inputii8Q - 4 * inputi8Q * inputiii8Q;

    if (quadraticInner > 0) {
        
    }

    var quadraticOuter = -4 
    
    // if (inputi7Q === inputii7Q && inputii7Q === inputiii7Q) {
    //     answer7Q.innerHTML = "Triangle is Equilateral"        
    // }
    // else if (inputi7Q === inputii7Q || inputi7Q === inputiii7Q || inputii7Q === inputiii7Q) {
    //     answer7Q.innerHTML = "Triangle is Isosceles";       
    // }
    // else{
    //     answer7Q.innerHTML = "Triangle is Scalene";
    // }

}

// Q9
function func9Q() {
    var inputi9Q = parseInt(document.getElementById("inputi9Q").value);
    var inputii9Q = parseInt(document.getElementById("inputii9Q").value);
    var answer9Q = document.getElementById("answer9Q");

    result = inputii9Q - inputi9Q ;

if (inputi9Q < inputii9Q) {
        answer9Q.innerHTML = "Profit is : " + result + " Rupess"; 
    }
    else{
        answer9Q.innerHTML = "Loss is : " + result*-1 + " Rupess"; 
    }

}

// Q10
function func10Q() {
    var inputi10Q = document.getElementById("inputi10Q").value;
    var inputii10Q = document.getElementById("inputii10Q").value;
    var answer10Q = document.getElementById("answer10Q");
    var error10Q = document.getElementById("error10Q");

    for (let index = 0; index < inputi10Q.length; index++) {
        if (inputi10Q == "") {
            error10Q.innerHTML = "**Please Enter a String";
            answer10Q.innerHTML = "";
        }    
        else if (inputii10Q == "") {
            error10Q.innerHTML = "**Please Enter a Letter to Find Occurence";
            answer10Q.innerHTML = "";
        }
        else if (inputi10Q.charAt(index) == inputii10Q) {
            answer10Q.innerHTML = inputii10Q + " : Exists in String : " + inputi10Q ;
        }
        else{
            answer10Q.innerHTML = inputii10Q + " : Doesn't Exist in String : " + inputi10Q ;
        }
    }
}


// console.log(parseInt("123abc"));
// console.log(Math.round("123.4"));
// console.log(Math.ceil(0));


document.getElementById("submit1Q").addEventListener("click", function (event) {
    event.preventDefault();
});
document.getElementById("submit2Q").addEventListener("click", function (event) {
    event.preventDefault();
});
document.getElementById("submit3Q").addEventListener("click", function (event) {
    event.preventDefault();
});
document.getElementById("submit4Q").addEventListener("click", function (event) {
    event.preventDefault();
});

document.getElementById("submit5Q").addEventListener("click", function (event) {
    event.preventDefault();
});
document.getElementById("submit7Q").addEventListener("click", function (event) {
    event.preventDefault();
});
document.getElementById("submit8Q").addEventListener("click", function (event) {
    event.preventDefault();
});
document.getElementById("submit9Q").addEventListener("click", function (event) {
    event.preventDefault();
});
document.getElementById("submit10Q").addEventListener("click", function (event) {
    event.preventDefault();
});
