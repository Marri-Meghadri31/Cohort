/*
 * Write a function that halts the JS thread (make it busy wait) for a given number 
    of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
    const start =performance.now();
    let flag=1;
    while(flag==1){
        const end=performance.now();
        if(end-start>=milliseconds){
            flag=0;
        }
    }
    return new Promise((resolve)=>{
        resolve();
    });
}

module.exports = sleep;
