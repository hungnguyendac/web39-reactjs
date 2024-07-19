import {add} from "./math.js"

console.log("add: " + add(100,2));

// 1. let and const

// 2. "this" trong arrow function

const person = {
    first: "WEB",
    last: "39",
    fullName: function () {
        return this.first + " " + this.last;
    },
};


// 3. Destructuring array
const array = [17, 24, 63, 43, 95];

const [a, b, c, d, e] = array;
console.log(c);

console.log(array[0]);

const user = {
    name: "Nguyễn Văn A",
    age: 20,
    email: "nguyenvana@gmail.com",
};

const { name, age, email } = user;

console.log(user.name + " " + user.age + " tuổi");
console.log(name + " " + age + " " + email);

// 4. Default Parameters
const hello = (name = "Test") => {
    console.log("Hello " + name);
};

hello();
hello("Nguyễn Đắc Hùng");

// 5. Rest Pramesters

const print_array = (...numbers) => {
    let sum = 0;
    // for (let i = 0; i < numbers.length; i++) {
    //     sum += numbers[i]
    // }
    numbers.forEach((value) => (sum += value));
    return sum;
};
console.log(print_array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));


// Spread Operator
const arr_2 = [1, 2, 3, 4, 5, 6, 7, 8]

const [x ,y, ...numberArr2] = arr_2

console.log(x);
console.log(y);
console.log(numberArr2);

