function printAsyncNumbers(n: number) {
    let time = 0;
    for (let i = 1; i <= n; i++) {
        const timeout = 1000 * i;
        time += timeout;
        const timeoutID = setTimeout(() => {
            console.log(i);
            clearInterval(timeoutID);
        }, time);
    }
}

export default printAsyncNumbers;
