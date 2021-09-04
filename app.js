
var userInput=document.querySelector("#txt-input")
var but=document.querySelector("#btn")
var output=document.querySelector("#output")

function getDate(input){
    var date= input.split("-")
   // console.log(date[0])
    return date[0]

}

function isLeapYear(input){
    var leap=true
    console.log(input)
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
    /*var year=num.split("-")
    var numb=year[0]
    console.log(numb)
    var toCheck=isLeapYear(numb);
another way of doing it without declaring getdate function*/

    var toCheck=isLeapYear(getDate(num));

    if(toCheck===true){
        output.innerText="You were Born On The Leap Year"
    }else{
        output.innerText="You Were Not Born On The Leap Year"
    }



}





but.addEventListener("click",clickFunction)
