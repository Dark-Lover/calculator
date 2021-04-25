const screen=document.querySelector('.showcase'),
      buttons=document.querySelector('.buttons');
let prevNumber='',
    currNumber='',
    operator='';

buttons.addEventListener('click', function(e){
    let valBtn = e.target.value;
    if(isNaN(parseInt(valBtn))){
        if(valBtn==='AC'){clearScreen(); currNumber='';}
        else if(valBtn==='DEL'){
        currNumber=currNumber.substring(0,currNumber.length-1);
        showNumber();
        }else if(valBtn==='='){calculate();}
        else if(valBtn ==='.'){currNumber+=valBtn;
            showNumber();}
        else{
            prevNumber=currNumber;
            currNumber='';
            operator=valBtn;
            showNumber();
        }
    }else {
        currNumber+=valBtn;
        showNumber();
}
})

      
function showNumber(){
    screen.textContent=prevNumber+operator+currNumber;
}
function clearScreen(){
    currNumber='';
    prevNumber='';
    operator='';
    screen.textContent='';
}
function calculate(){
    if(operator==='÷') operator='/';
    let res=eval(prevNumber + operator + currNumber  );
    if(isFloat(res))screen.textContent=res.toFixed(2);
    else screen.textContent=res;
    currNumber='';
    prevNumber='';
    operator='';
}
function isFloat(n){
    return Number(n) === n && n % 1 !== 0;
  }