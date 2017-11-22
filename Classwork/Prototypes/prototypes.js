class UberDriver {
    constructor(name, carClass, capacity) {
        this.name = name
        this.carClass = carClass
        this.capacity = capacity
        this.currentPassengers = 0
    }
}

let al = new UberDriver("Al", "economy", 3)


UberDriver.prototype.call = function (passengers, carClass) {
    this.currentPassengers = this.currentPassengers + passengers
    if (this.capacity > 0 && this.carClass === carClass) {
        return true
    } else {
        return false
    }
}

UberDriver.prototype.deliver = function () {
    console.log("passengers are delivered")
    this.currentPassengers = 0
}

al.call(1, "economy")
al.call(2, "economy")
al.deliver()




