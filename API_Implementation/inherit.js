//ES5

//父类被继承的方法
function SuperType(name) {
    this.name = name;
    this.colors = ['red', 'blue', 'green'];
}

SuperType.prototype.sayName = function () {
    console.log(this.name);
}
const test = new SuperType('test');
// console.log(test);
// console.log(test.sayName());

function childrenType(name, age) {
    SuperType.call(this, name);
    this.age = age;
}

function inheritPrototype(childrenType, SuperType) {
    const prototype = Object.create(SuperType.prototype);
    prototype.constructor = childrenType;
    childrenType.prototype = prototype;
}

const instance1 = new childrenType('OBKoro1', 24);
console.log(instance1);