// Space ship class

const spaceships = {}
const planets = {}

class Spaceship {
    constructor(name, planetName) {
        this.name = name

        // the new spaceship starts with no stops assigned
        this.stops = []

        // the new spaceship's current planet will be the
        // object listed under `planetName` in the planets object
        this.currentPlanet = planets[planetName]

        // store the new object in the spaceships object,
        // under its own name
        spaceships[name] = this

        // add the new spaceship to its current planet's list of ships
        this.currentPlanet.spaceships.push(this)


    }

    /**
     * Find a planet from the planets object by name,
     * and add it to the list of stops
     *
     * @param {String} planetName
     */
    addStop(planetName) {
        this.stops.push(planets[planetName])
    }

    travelTo(planetName) {
        if (this.stops.includes(planets[planetName])) {
            if (this.currentPlanet === planets[planetName]) {
                console.log(`Already on ${this.currentPlanet.name}`)
                return
            }

            this.depart()
            this.currentPlanet = planets[planetName]
            planets[planetName].spaceships.push(this)
            console.log(this.currentPlanet)
            // console.log(this.stops)
        } else {
            console.log("Destination is not in list of stops")
        }
    }

    goToNextPlanet() {
        // find index of current planet
        // increment index by one
        // update this.currentPlanet
        // [1, 2, 3].indexOf(2)
        let currentIndex = this.stops.indexOf(this.currentPlanet)
        if (currentIndex === this.stops.length -1) {
            this.currentPlanet = this.stops[0]
        } else {
            this.currentPlanet = this.stops[currentIndex + 1]
        }
        console.log(`Moved to next stop: ${this.currentPlanet.name}`)
    }

    depart() {
        // tell the planet we are on that we are leaving
        let index = this.currentPlanet.spaceships.indexOf(this)
        this.currentPlanet.spaceships.splice(index, 1)
    }

    leaveFrom(currentPlanetName) {
        this.planets[planetName].splice(this.planets[planetName].indexOf(currentPlanetName), 1);
    }

}

class Planet {
    constructor(name) {
        this.name = name

        // the planet has no spaceships yet
        this.spaceships = []
    }

    /**
     * Log how many planets the planet has, and its name
     */
    report() {
        console.log(`I am planet ${this.name} and I have ${this.spaceships.length} spaceships on my face`)
        for (const spaceship of this.spaceships) {
            console.log(`${spaceship.name}`)
        }
    }
}

planets["Earth"] = new Planet("Earth")
planets["Mars"] = new Planet("Mars")
planets["Venus"] = new Planet("Mars")

let spaceship = new Spaceship("Mr. Monkey", "Earth")

spaceship.addStop("Mars")
spaceship.addStop("Earth")
spaceship.depart("Earth")
spaceship.travelTo("Mars")
spaceship.goToNextPlanet()
spaceship.goToNextPlanet()
spaceship.goToNextPlanet()
spaceship.goToNextPlanet()
spaceship.goToNextPlanet()
planets["Mars"].report()