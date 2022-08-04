// Написать функцию, которая создает пустой объект, но без прототипа.

const CreateObject = () => {
    return Object.create(null);
}

obj = CreateObject();
console.log(Object.getPrototypeOf(obj))