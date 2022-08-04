// Написать функцию, которая принимает в качестве аргументов строку и объект,
// а затем проверяет есть ли у переданного объекта свойство с данным именем.
// Функция должна возвращать true или false.

const person = {
    city: "Moscow",
}

const checkPropExists = (propName, obj) => {
    if (propName in obj) {
        return true;
    } else {
        return false;
    }
}

console.log(checkPropExists("city", person))
console.log(checkPropExists("ownCity", person))