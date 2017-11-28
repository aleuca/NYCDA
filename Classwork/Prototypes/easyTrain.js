







class TrainStation {
    constructor(name) {
        this.name = name
        this.trains = []
    }

    trainArrive(train) {
        this.trains.push(train)
    }

    trainDepart(train) {
        this.trains.splice(this.trains.indexOf(train), 1);
    }

    report(train) {
        console.log(`${this.name} station has ${this.trains.length} trains:`)
    }
}



class Train {
    constructor(name, stops) {
        this.name = name
        this.currentStationIndex = 0
        this.stops = stops
    }

    getCurrentStation() {
        return this.stops[this.currentStationIndex];
    }

    goToNextStop() {
        this.getCurrentStation()
        if (this.currentStationIndex === this.stops.length - 1) {
            this.currentStationIndex = 0
        } else {
            this.currentStationIndex += 1
        }



        nextStation.trainArrive(this)
        console.log("traveling!")
    }


    report() {
        console.log(`Train ${this.name} is at ${this.currentStation.name}!`)
    }
}

let amsterdam = new TrainStation("Amsterdam")
let hague = new TrainStation("Hague")
let lisbon = new TrainStation("Lisbon")
let vienna = new TrainStation("Vienna")
let paris = new TrainStation("Paris")


let thomas = new Train("Thomas", amsterdam, ["lisbon", "hague", "prague", "paris"])
let bob = new Train("Bob", hague, ["paris", "rotterdam", "vienna"])


thomas.travelTo(amsterdam)
bob.goToNextStop(vienna)
thomas.goToNextStop(paris)
thomas.travelTo(lisbon)
bob.travelTo(amsterdam)
bob.report()
thomas.report()





