function counter(time){
    
    process.stdout.write("\r\x1b[KCounter : " + time);
    time++;

    setTimeout(counter,1000,time);

}

let time=0;
counter(time);