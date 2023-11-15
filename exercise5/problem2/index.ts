function printNumberInInterval(n: number) {
    let i = 1;
    const intervalID = setInterval(() => {
        console.log(i);
        i++;
        if (i > n) {
            clearInterval(intervalID);
        }
    }, 1000);
}

export default printNumberInInterval;
