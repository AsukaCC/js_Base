/**
 * @obj {Object} 要拷贝的对象
 */

function deepCopy(obj,hash = new WeakMap()) {
    if (obj === null) return null;
    //处理正则数据
    if (obj instanceof RegExp) return new RegExp(obj);
    //处理日期数据
    if (obj instanceof Date) return new Date(obj);
    //处理基本类型数据
    if (typeof obj !== 'object') return obj;
    //处理数组
    if (obj instanceof Array) {
        let newObj = [];
        for (let i = 0; i < obj.length; i++) {
            newObj[i] = deepCopy(obj[i]);
        }
        return newObj;
    }
    //处理对象
    if (hash.has(obj)) return hash.get(obj);
    const newObj = new obj.constructor();
    hash.set(obj, newObj);
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[key] = deepCopy(obj[key],hash);
        }
    }

    return newObj;

}

let obj = {
  name: 'John Doe',
  age: 30,
  address: {
    street: '123 Main St',
    city: 'Exampleville',
    zipCode: '12345',
  },
  hobbies: ['Reading', 'Gardening'],
};

// 这是一个包含嵌套结构的JSON对象，可用于测试深拷贝函数。


const obj2 = deepCopy(obj);
console.log(obj2);
