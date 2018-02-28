// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (x) => {
    return x;
};
const createNotEnumerableProperty = (x) => {
	Object.defineProperty(Object.prototype, x, {
        enumerable: false,
        get: () => Object.prototype._value, 
        set: (value) => Object.prototype._value = value
    });
    return x;
};
const createProtoMagicObject = () => {
	let magObj = () =>{};
    magObj.prototype = magObj.__proto__;
    return magObj;
};

var count = 0;
Function.prototype.valueOf = function() {
    return count;
};
const incrementor = () => {
	count++;
	return incrementor;
};

var countFotIncr = 0;
const asyncIncrementor = () => {
	 return new Promise((resolve) => {
        countFotIncr++;
        return resolve(countFotIncr);
    });
};
const createIncrementer = () => {return {
        i: 0,
        next() {
            return { value: ++this.i }
        },
        [Symbol.iterator]() {
            return {
                next: () => {
                    return this.next();
                },
            };
        },
    };};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (x) => {
	return new Promise((resolve) => {
        setTimeout(function(){
            resolve(x);
        }, 1001);
    });
};

const getDeepPropertiesCount = (x) => { 
	let props = Object.getOwnPropertyNames(x);
    let a = props.length;
    props.forEach(prop => {
        if (Object.getOwnPropertyNames(x[prop]).length > 0){
            a += getDeepPropertiesCount(x[prop]);
        };
    });
    return a;
};
const createSerializedObject = () => {
	return null;
};
const toBuffer = () => {};

const sortByProto = (x) => {
	return x.map((a, i) => {
        let count = 0;
        while (a = a.__proto__){
             count++
        }
        return [count, x[i]]
    }).sort((y, z) => y[0] - z[0]).map(([a, i]) => i)
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;