prompt("Give me your");
var userInput=document.querySelector("#txt-input")
var but=document.querySelector("#btn")
var output=document.querySelector("#output")

function isLeapYear(input){
    var leap=true
    if(input%4===0){
        if(input%100===0){
            if(input%400===0){
                leap
            }else{leap=false}
        }else{
            leap
        }

    }else{
       
     leap=false
    }
    return leap
};



function clickFunction(){
    var num=userInput.value;
    var toCheck=isLeapYear(num);

    if(toCheck===true){
        output.innerText="You were Born On The Leap Year"
    }else{
        output.innerText="You Were Not Born On The Leap Year"
    }



}





but.addEventListener("click",clickFunction)
