"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var _name;
console.log('\n===== Classes =====');
/*
 * Classes & Inheritance
 */
class Animal {
    constructor(theName) {
        this.name = theName;
    }
    move(distanceInMeters = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}
class Snake extends Animal {
    constructor(name) {
        super(name);
    }
    move(distanceInMeters = 5) {
        console.log('Slithering...');
        super.move(distanceInMeters);
    }
}
class Horse extends Animal {
    constructor(name, age) {
        super(name); // <-- this 사용 전에 호출 되어야함.
        this.age = age;
    }
    move(distanceInMeters = 45) {
        console.log('Galloping...');
        super.move(distanceInMeters);
    }
}
const sam = new Snake('Sammy the Python');
const tom = new Horse('Tommy the Palomino', 45);
sam.move();
tom.move(34);
/*
 * Public Private Protected
 */
class Animal2 {
    constructor(theName) {
        _name.set(this, void 0);
        __classPrivateFieldSet(this, _name, theName);
    }
}
_name = new WeakMap();
class Person {
    constructor(name) {
        this.name = name;
    }
}
class Employee extends Person {
    constructor(name, department) {
        super(name);
        this.department = department;
    }
    getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}
const howard = new Employee('Howard', 'Sales');
console.log(howard.getElevatorPitch());
/*
 * Advanced Techniques
 */
class Greeter {
    greet() {
        if (this.greeting) {
            return 'Hello, ' + this.greeting;
        }
        else {
            return Greeter.standardGreeting;
        }
    }
}
Greeter.standardGreeting = 'Hello, there';
const greeter1 = new Greeter();
console.log(greeter1.greet()); // "Hello, there"
const greeterMaker = Greeter; // 클래스 또는 생성자 함수를 가르킴.
greeterMaker.standardGreeting = 'Hey there!';
const greeter2 = new greeterMaker();
console.log(greeter2.greet()); // "Hey there!"
Greeter.standardGreeting = 'Hi, there!';
const greeter3 = new greeterMaker();
console.log(greeter3.greet()); // "Hey there!"
//# sourceMappingURL=classes.js.map