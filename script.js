const days1 = document.getElementById('days');
const hours1 = document.getElementById('hours');
const minutes1 = document.getElementById('minutes');
const seconds1 = document.getElementById('seconds');


const date = '1 April 2024';

function countdown(){
    const newDate = new Date(date);
    const currentDate=new Date();

    const totalseconds= (newDate-currentDate)/1000;

    const days= Math.floor(totalseconds/ 3600 / 24);

    const hours=Math.floor(totalseconds/3600) % 24;
    const minutes=(Math.floor(totalseconds/60) % 60) % 60;
    const seconds = Math.floor(totalseconds % 60);


    days1.innerHTML=days;
    hours1.innerHTML=hours;
    minutes1.innerHTML=minutes;
    seconds1.innerHTML=seconds;

}

countdown();

setInterval(countdown,1000);