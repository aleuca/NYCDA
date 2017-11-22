// class for every station
// every statiuon neds to know which train it has in it at any given moment
// with every "tick" a train moves to the next station in its route
// every train needs to know which passengers are on it right now
// every passenger has a destination and once they reach it they get off the train
// every station needs to know which passengers are in the station and which passengers need to get off the train


class TrainSimulator {
    constructor(station) {
        this.station = station
    }
}

class Train {
    constructor(train) {
        this.name = train
        this.availableStations = []

        this.addStations = function(availableStation) {
        this.availableStations.push(availableStation)
        }
    }


}