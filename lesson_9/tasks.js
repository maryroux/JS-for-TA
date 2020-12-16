/**************task_1*******************/
let arr = ["Tom", "Sam", "Ray", "Bob"];
let [x, y, z, l] = arr;
console.log(x);
console.log(y);
console.log(z);
console.log(l);

/**************task_2******************/
let data = {
  names: ["Sam", "Tom", "Ray", "Bob"],
  ages: [20, 24, 22, 26],
};
let {
  names: [name1, name2, name3, name4],
  ages: [age1, age2, age3, age4],
} = data;
console.log(name2);
console.log(age2);
console.log(name4);
console.log(age4);

/*************task_3*****************/
function mul(...parameters) {
  let arr = Array.from(parameters);
  let multiplyResult = 1;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] != "number") {
      count++;
    } else {
      multiplyResult *= arr[i];
    }
  }
  if (count == arr.length) {
    return 0;
  }
  return multiplyResult;
}
console.log("First result = " + mul(1, "str", 2, 3, true));
console.log("Second result = " + mul(null, "str", false, true));

/************task_4****************/
let server = {
  data: 0,
  convertToString: function (callback) {
    callback(() => {
      return this.data + "";
    });
  },
};
let client = {
  server: server,
  calc: function (data) {
    this.server.data = data;
    this.result = "";
    this.server.convertToString(this.notification());
  },
  notification: function () {
    return (callback) => {
      this.result = callback();
    };
  },
};
client.calc(123);
console.log(client.result);
console.log(typeof client.result);

/***************task_5******************/
let keys = [1, 2, 3, 4];
let values = ["div", "span", "b", "i"];
function mapBuilder(keys, values) {
  let tempMap = new Map();
  for (let i = 0; i < keys.length; i++) {
    tempMap.set(keys[i], values[i]);
  }
  return tempMap;
}
let map = mapBuilder(keys, values);
console.log(map.size);
console.log(map.get(2));
