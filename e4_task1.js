// Написать, функцию, которая принимает в качестве аргумента объект и выводит 
// в консоль все ключи и значения только собственных свойств.
// Данная функция не должна возвращать значение.

const person = {
    city: "Moscow",
}

const student = Object.create(person);
student.ownCity = "Piter";

const showOwnPropValues = (obj) => {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(`key: ${key}, value: ${obj[key]}`);
        }
    }
};

showOwnPropValues(student)