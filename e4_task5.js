// Переписать консольное приложение из предыдущего юнита на классы. (task 4)

// parent class
class ElectricalDevice {
    constructor(powerConsumption) {
        this.powerConsumption = powerConsumption;
        this.swithedOn = false;
    }
    switchOnOff() {
        this.swithedOn = !this.swithedOn;
        const status = this.swithedOn ? "ON" : "OFF";
        console.log(`Done. Current circuit status is swithed ${status}.`);
    }
    calculatePowerConsumption(hours) {
        return hours * this.powerConsumption
    }
}

// laptop devices
class Laptop extends ElectricalDevice {
    constructor(powerConsumption, printer = null) {
        super(powerConsumption);
        this.printer = printer;
    }
    printPage(textToPrint) {
        if (!this.swithedOn) {
            console.log("Powered down, please swith on device");
        } else if (this.printer == null) {
            console.log("Printer is not defined, can not print page.");
        } else {
            console.log(`Printing... ${textToPrint}`);
        }
    }
}

// lamp devices
class Lamp extends ElectricalDevice {
    constructor(powerConsumption, lightColor = "") {
        super(powerConsumption);
        this.__colors__ = ["warm", "natural", "cool"];
        if (this.__colors__.includes(lightColor.toLowerCase())) {
            this.lightColor = lightColor.toLowerCase();
        } else {
            console.log(`'${lightColor}' is not allowed. Choise color from ${JSON.stringify(this.__colors__)}.`)
            console.log(`lightColor will be set to '${this.__colors__[0]}'`)
            this.lightColor = this.__colors__[0];
        }
    }
    changeColor() {
        let indx = this.__colors__.indexOf(this.lightColor);
        if (indx === -1) {
            indx = 0
        } else if (indx >= this.__colors__.length - 1) {
            indx = 0
        } else {
            indx += 1
        }
        this.lightColor = this.__colors__[indx]
        console.log(`lightColor changed to '${this.lightColor}'`)
    }
}


console.log("\n\n===== Laptop =====")
const myLaptop = new Laptop(200, "canon");
myLaptop.printPage("la-la-la")
myLaptop.switchOnOff()
myLaptop.printPage("la-la-la")
console.log(`device power consumption for a day is ${myLaptop.calculatePowerConsumption(24)} Watt`)

console.log("\n\n===== Lamp =====")
const myLamp = new Lamp(60, "cool");
myLamp.changeColor()
myLamp.changeColor()
myLamp.changeColor()
myLamp.changeColor()
console.log(`device power consumption for a day is ${myLamp.calculatePowerConsumption(24)} Watt`)

