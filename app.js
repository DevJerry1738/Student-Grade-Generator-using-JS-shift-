var score = prompt("please enter your score","");
if (score==null){
    alert("please enter your score")
}else{
    score=parseInt(score);

if (isNaN(score)){
    alert("please enter a number")
}
    
switch(true){
    
    case score <= 60:
        alert('F: FAIL');
        break;
    case score <= 65.5:
        alert('C-: PASS');
         break;
    case score <= 70:
        alert('C: PASS');
        break;   
    case score <= 80:
        alert('B: PASS');
        break; 
    case score <= 90:
        alert('B+: PASS');
        break;   
    case score <= 100:
        alert('A: PASS');
        break;
    case score > 100:
        alert('PLEASE ENTER A VALID SCORE');
        break;
}
}

