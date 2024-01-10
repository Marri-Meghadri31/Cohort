let time=0;

setInterval(()=>{

    process.stdout.write("\r\x1b[K" + "Counter : " + time);
    time++;

}, 1000);