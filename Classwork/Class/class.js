const EventEmitter = require("events");

class Stopwatch extends EventEmitter {
    constructor() {
        super();
    }



    start() {
        let seconds = 0;
        let minutes = 0;



        setInterval(
            () => {
                seconds++

                if(seconds === 10) {
                    minutes++
                    this.emit("minutes", console.log("minutes", minutes));
                }

                this.emit("seconds", console.log("seconds", seconds));

            }, 1000);


    }

    stop() {
        clearInterval();
    }
}

let myEmitter = new Stopwatch();

myEmitter.start();

myEmitter.on("seconds", () => console.log("seconds occured"));
myEmitter.on("minutes", () => console.log("minutes occured"));





