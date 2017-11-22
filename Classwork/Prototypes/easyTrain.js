class TrainStation {
    constructor(name) {
        this.name = name
        this.trains = []
    }

    trainArrive(train) {
        this.trains.push(train)
        return this.trains
    }

    trainDepart(train) {
        for (let i = 0; i < this.trains.length; i++) {
            if (trains[i] === train) {
                trains.splice(i, 1)
            }
        }
        return this.trains
    }

    report(train) {
        let trainNames = []
        this.trains.forEach((train) => {
        trainNames.push(train.name)
        })

        trainNames = trainNames.join(", ")
        console.log(`I am station ${this.name} and I have ${this.trains.length} trains: ${trainNames}`)
    }
}



class Train {
    constructor(name, currentStation) {
        this.name = name
        this.currentStation = currentStation
    }

    travelTo(newStation) {
        if (this.currentStation === newStation) {
            console.log(`- Train ${this.name} is already at ${this.currentStation.name} -- no need to go anywhere!`)
            return
        }
        this.currentStation.trainDepart(this)
        newStation.trainArrive(this)
        this.currentStation = newStation
        return this.currentStation.name
    }

    report() {
        console.log(`- I am train ${this.name} and I am at ${this.currentStation.name}!`)
    }
}

let station1 = new TrainStation("Amsterdam")
let station2 = new TrainStation("Hague")
let station3 = new TrainStation("Lisbon")

let train1 = new Train("Thomas", station1)
let train2 = new Train("Bob", station2)

train1.report()
train2.report()
train1.travelTo(station1)
train1.travelTo(station3)
train1.report()
train2.travelTo(station1)
train2.report()





