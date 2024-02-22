// setTimeout setInterval setImmediate

// Executes for the first time after 3 sec.
setInterval(()=> {
    console.log('Interval: 3 sec')
}, 3000);

setTimeout(()=>{
    console.log('Timeout: 3 sec');
    setTimeout(() => {
        console.log('Timeout: 6 sec');
        setTimeout(()=> {
            console.log('Timeout: 9 sec');
        }, 3000);
        console.log('Timeout: 6 sec');
    }, 3000);
    console.log('Timeout: 3 sec');
}, 3000);

console.log('Hello World');
