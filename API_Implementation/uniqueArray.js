const a = { test: 1 }
const oldArr = [1, 1, 'true', 'true', true, true, 15, 15, false, false, undefined, undefined, null, null, NaN, NaN, 'NaN', 'NaN', 0, 0, 'a', 'a', {}, {}, a, a]

// ES6基本类型去重
function unique(arr) {
    return Array.from(new Set(arr))
}

//基本类型 推荐使用
// console.log('es6 set', unique(oldArr))

//includes
function includesArray(arr) {
    if(!Array.isArray(arr)) {
        console.log('type error!')
        return
    }
    let newArr = []
    for(let i = 0; i < arr.length; i++) {
        if(!newArr.includes(arr[i])) {
            newArr.push(arr[i])
        }
    }
    return newArr
}

// console.log(includesArray(oldArr));

//indexof 无法识别NaN
function uniqueArray(arr) {
    if(!Array.isArray(arr)) {
        console.log('type error!')
        return
    }
    let newArr =[]
    for (let i = 0; i < arr.length; i++) {
        if (newArr.indexOf(arr[i]) === -1) {
            newArr.push(arr[i])
        }
    }
    return newArr;
}

// console.log(uniqueArray(oldArr));

const oldArrObj = [
    { id: 'Koro1', artist: '第一个相同key值元素' },
    { id: 'Koro1', artist: '第2个相同key值元素' },
    { id: '威廉古堡', artist: '两个对象一模一样' },
    { id: '威廉古堡', artist: '两个对象一模一样' },
    { artist: '两个对象一模一样', id: '威廉古堡' },
    { id: '以父之名', artist: '周杰伦1' },
    { artist: '周杰伦2', id: '以父之名' },
    { id: '七里香', artist: '周杰伦' },
]

//后面key值相同的元素覆盖前面的
// function uniqueObj(arr, key) {
//     const res = {};
//     const result = [];
//     arr.forEach((item) => {
//         res[item[key]] = item
//     })
//     for (const key in res) {
//         result.push(res[key])
//     }
//     return result
// }

//前面key值相同的元素覆盖前面的
// function uniqueObj(arr, key) {
//     const res = {};
//     const result = [];
//     arr.forEach((item) => {
//         if (res[item[key]] == undefined) res[item[key]] = item;
//     })
//     for (const key in res) {
//         result.push(res[key])
//     }
//     return result
// }



// function uniqueObj(arr, key) {
//     const res = new Map()
//     return arr.filter((a) => !res.has(a[key]) && res.set(a[key], 1))
// }

// function uniqueObj(arr, key) {
//     const res = {};
//     return arr.filter((item) => {
//         return res.hasOwnProperty(item[key]) ? false : (res[item[key]] = true)
//     })
// }


// console.log(uniqueObj(oldArrObj, 'id'));

//只能过滤key，value一致的对象
// function uniqueObj(arr) {
//     const hash = {}
//     arr.forEach((item) => {
//     hash[JSON.stringify(item)] = item
//     })
//   // 遍历对象 取出元素
//     arr = Object.keys(hash).map((key) => JSON.parse(key))
//     return arr
// }


console.log(uniqueObj(oldArrObj));

