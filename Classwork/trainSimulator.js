class TrainSimulator {
    constructor (train, passengers, allStops) {
        this.name = train
        this.location = []
        this.passengers = []
        this.addPassengers = function (passengerName) {
            for (const passenger in passengerName) {
                this.passengers.push(passenger)
            }
        }
        this.stops = []
        this.addStops = function (stopName) {
            for (const stop of stopName) {
                this.stops.push(stop)
            }
            console.log(this.stops)
            return this.stops
        }
        this.trains = []
        this.addTrains = function (train) {
            for (const name of train) {
                this.trains.push(train)
            }
            console.log(this.trains)
            return this.trains
        }
    }

    travel (tick) {
        let currentStop = 0
        for (const rotation in tick) {
            currentStop++
        }
    }
}

class Passenger {
    constructor (passenger, location) {
        this.name = passenger
        this.location = location
        this.destination = function (destination) {
            console.log(`${passenger}` + " wants to go to " + `${destination}`)
        }
    }
}

TrainSimulator.prototype.pickup = function(person, destination) {
    for (const stop of this.stops) {
        this.trains.push()
        if (stop === destination) {
            console.log("picked up" + `${person}` + " who wants to go to " + `${destination}`)
            console.log(`${person}` + " is traveling to " + `${destination}`)
            console.log(`${person}` + " has reached " + `${destination}`)
        }
    }
}


class TrainSimulator {
    constructor (station) {
        this.station = station
        this.location = []
        this.passengers = []
        this.trains = []
        this.stops = []
        this.addPassengers = function (passengerName) {
            for (const passenger in passengerName) {
                this.passengers.push(passenger)
            }
        }
        this.addStops = function (stopName) {
            for (const stop of stopName) {
                this.stops.push(stop)
            }
            console.log(this.stops)
            return this.stops
        }
        this.addTrains = function (train) {
            for (const name of train) {
                this.trains.push(train)
            }
            console.log(this.trains)
            return this.trains
        }
        travel (tick) {
            let currentStop = 0
            for (const rotation in tick) {
                currentStop++
            }
        }
    }
}