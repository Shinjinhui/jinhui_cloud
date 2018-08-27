function printClock(){
    var currentDate = new Date();
    var amPm = 'AM';    //ampm 기본값은 AM
    var currentHours = addZeros(currentDate.getHours(),2);
    var currentMinute = addZeros(currentDate.getMinutes(),2);
    var currentSeconds = addZeros(currentDate.getSeconds(),2);

    if(currentHours >= 12){ //AM, PM을 바꿔주는 소스
        ampm = 'PM';
        currentHours = addZeros(currentHours-12,2);
    }
    document.getElementById('clock').innerHTML = currentHours+":"+currentMinute+":"+currentSeconds+ampm;
   setTimeout("printClock()",1000); //1초마다 printclock()함수 호출
}

function addZeros(num, digit){  //자리수 맞춰주기 위한 소스 
    var zero='';
    num = num.toString();
    if(num.length < digit){
        for(i=0; i<digit-num.length; i++){
            zero +='0';
        }
    }
    return zero + num;
}