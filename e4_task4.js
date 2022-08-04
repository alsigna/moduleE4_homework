/*
Реализовать следующее консольное приложение подобно примеру, который разбирался в видео.
Реализуйте его на прототипах.

Определить иерархию электроприборов. Включить некоторые в розетку. Посчитать потребляемую мощность. 

Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.

План:
        Определить родительскую функцию с методами, которые включают/выключают прибор из розетки.
        Создать делегирующую связь [[Prototype]] для двух конкретных приборов.
        У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов.
        Создать экземпляры каждого прибора.
        Вывести в консоль и посмотреть результаты работы, гордиться собой. :)

Общие требования:
        Имена функций, свойств и методов должны быть информативными.
        Соблюдать best practices:
            использование camelCase нотации для переменных и методов, PascalCase для названия функций-конструкторов и классов;
            информативные имена (а не a, b);
            четкая связь между классом и его экземплярами (класс описывает множество, а экземпляр конкретную реализацию);
            использование синтаксиса ES6 (кроме функции-конструкторов) и т. д.
*/

// common
function ElectricalDevice(powerConsumption) {
    this.powerConsumption = powerConsumption;
    this.swithedOn = false;
}
ElectricalDevice.prototype.switchOnOff = function () {
    this.swithedOn = !this.swithedOn;
    const status = this.swithedOn ? "ON" : "OFF";
    console.log(`Done. Current circuit status is swithed ${status}.`);
}
ElectricalDevice.prototype.calculatePowerConsumption = function (hours) {
    return hours * this.powerConsumption;
}

// laptop devices
function Laptop(powerConsumption, printer = null) {
    this.powerConsumption = powerConsumption;
    this.printer = printer;
}
Laptop.prototype = new ElectricalDevice()
Laptop.prototype.printPage = function (textToPrint) {
    if (!this.swithedOn) {
        console.log("Powered down, please swith on device");
    } else if (this.printer == null) {
        console.log("Printer is not defined, can not print page.");
    } else {
        console.log(`Printing... ${textToPrint}`);
    }
}

// lamp devices
function Lamp(powerConsumption, lightColor = "") {
    this.__colors__ = ["warm", "natural", "cool"];
    this.powerConsumption = powerConsumption;
    if (this.__colors__.includes(lightColor.toLowerCase())) {
        this.lightColor = lightColor.toLowerCase();
    } else {
        console.log(`'${lightColor}' is not allowed. Choise color from ${JSON.stringify(this.__colors__)}.`);
        console.log(`lightColor will be set to '${this.__colors__[0]}'`);
        this.lightColor = this.__colors__[0];
    }
}
Lamp.prototype = new ElectricalDevice()
Lamp.prototype.changeColor = function () {
    let indx = this.__colors__.indexOf(this.lightColor);
    if (indx === -1) {
        indx = 0;
    } else if (indx >= this.__colors__.length - 1) {
        indx = 0;
    } else {
        indx += 1;
    }
    this.lightColor = this.__colors__[indx];
    console.log(`lightColor changed to '${this.lightColor}'`);
}


console.log("\n\n===== Laptop =====")
const myLaptop = new Laptop(200);
myLaptop.switchOnOff()
myLaptop.printPage("la-la-la")
console.log(`device power consumption for a day is ${myLaptop.calculatePowerConsumption(24)} Watt`)

console.log("\n\n===== Lamp =====")
const myLamp = new Lamp(60);
myLamp.changeColor()
myLamp.changeColor()
myLamp.changeColor()
myLamp.changeColor()
console.log(`device power consumption for a day is ${myLamp.calculatePowerConsumption(24)} Watt`)

