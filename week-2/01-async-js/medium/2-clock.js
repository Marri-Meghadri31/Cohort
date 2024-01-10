function terminalclock(){

    const date= new Date();

    const hr=date.getHours();
    const min=date.getMinutes();
    const sec=date.getSeconds();

    let hr12=hr%12;
    let noon="AM";

    if(hr==0 || hr==24 || hr==12){
        hr12=12;
    }
    if(hr>=12 && hr<=23)noon="PM";
    
    let currtime = " : " +
    (min < 10 ? "0" : "") + min + " : " +
    (sec < 10 ? "0" : "") + sec + " "; 

    console.clear();
    console.log("\nCurrent TIME\n");
    console.log("HH : MM : SS");
    console.log((hr < 10 ? "0" : "") + hr + currtime );
    console.log();
    console.log((hr12 < 10 ? "0" : "") + hr12 + currtime +noon + " ");

    setTimeout(terminalclock,1000);
}

terminalclock();