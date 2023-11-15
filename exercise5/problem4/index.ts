class Timer {
    #ms = 0; // updated at pause()
    #lastDate = new Date();
    #isRunning = false;

    constructor() {
        this.reset();
    }

    start() {
        if (!this.#isRunning) {
            this.#isRunning = true;
            this.#lastDate = new Date();
        }
    }

    pause() {
        this.#isRunning = false;
        const now = new Date();

        this.#ms += now.getTime() - this.#lastDate.getTime();

        this.#lastDate = now;
    }

    reset() {
        this.#ms = 0;
        this.#lastDate = new Date();
        this.#isRunning = false;
    }


    log() {
        const MS_IN_S = 1000;
        const S_IN_M = 60;
        const M_IN_H = 60;

        let elapsed = this.#ms;

        if (this.#isRunning) {
            const now = new Date();
            elapsed += now.getTime() - this.#lastDate.getTime();
        }

        console.log(
            {
                h: getHours(elapsed),
                m: new Date(elapsed).getMinutes(),
                s: new Date(elapsed).getSeconds(),
                ms: new Date(elapsed).getMilliseconds(),
            }
        );

        function getHours(timestamp: number) {
            return Math.trunc(timestamp / MS_IN_S / S_IN_M / M_IN_H);
        }
    }
}

export default Timer;
