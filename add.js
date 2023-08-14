let outputscreen=document.getElementById("outputScreen");


function display(num){
        outputscreen.value +=num;
    }
    
function calculate(){
    try{
        outputscreen.value=eval(outputscreen.value);
    }
    catch(error)
    {
        alert("Invalid calculation...");
    }
}

function del(){
    outputscreen.value=outputscreen.value.slice(0,-1);
}
function cl(){
    outputscreen.value="";
}

function square(num){
    num=outputscreen.value;
    var result=1;
    for(var i=0; i<2; i++){
        result *= num;
    }
 outputscreen.value= result;
}
function powern(){
    var num=outputscreen.value;
    addEventListener('click', outputscreen.value= "?");
    addEventListener('click', outputscreen.value= outputscreen.value);
    
    var result=1;
    for(var i=0; i<exponential; i++){
     result *=num;    
    }
    outputscreen.value=result;
}
function factorial(n){
    n = outputscreen.value;
    var result=1;
      if(n==0){outputscreen.value=1;}
      
      else if(n>0){ 
        for(var i= n; i>0; i--){
            result *= i;
        }
        outputscreen.value= result;
     }
}
function squareroot(n){    
    n = outputscreen.value;
    var result= Math.sqrt(n);
    outputscreen.value=result;
}
function reciprocal(n){
    n = outputscreen.value;
    var result= 1/n;
    outputscreen.value=result;
}
function plusMinus(){
    var result=-(outputscreen.value);
    outputscreen.value= result;
}

function off(){
    alert("Programmer Is Working on It!");
}
function on(){
    alert("Programmer Is Working on It!");
}
function powerNumber(base, exponential){
var result=1;
base = outputscreen.value;
exponential=prompt("Enter Exponential: ");
display(exponential);
for(var i=0; i<exponential; i++){
result *=base;
}
outputscreen.value= result;
}



























