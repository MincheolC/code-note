console.log('\n===== Classes =====');

/*
 * Classes & Inheritance
 */
class Animal {
  name: string;
  constructor(theName: string) {
    this.name = theName;
  }
  move(distanceInMeters = 0) {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}

class Snake extends Animal {
  constructor(name: string) {
    super(name);
  }
  move(distanceInMeters = 5) {
    console.log('Slithering...');
    super.move(distanceInMeters);
  }
}

class Horse extends Animal {
  age: number;
  constructor(name: string, age: number) {
    super(name); // <-- this 사용 전에 호출 되어야함.
    this.age = age;
  }
  move(distanceInMeters = 45) {
    console.log('Galloping...');
    super.move(distanceInMeters);
  }
}

const sam = new Snake('Sammy the Python');
const tom: Animal = new Horse('Tommy the Palomino', 45);

sam.move();
tom.move(34);

/*
 * Public Private Protected
 */
class Animal2 {
  #name: string;
  constructor(theName: string) {
    this.#name = theName;
  }
}

class Person {
  protected name: string;
  protected constructor(name: string) {
    this.name = name;
  }
}

class Employee extends Person {
  private department: string;

  constructor(name: string, department: string) {
    super(name);
    this.department = department;
  }

  public getElevatorPitch() {
    return `Hello, my name is ${this.name} and I work in ${this.department}.`;
  }
}

const howard = new Employee('Howard', 'Sales');
console.log(howard.getElevatorPitch());

/*
 * Advanced Techniques
 */

class Greeter {
  static standardGreeting = 'Hello, there';
  greeting: string | undefined;

  greet() {
    if (this.greeting) {
      return 'Hello, ' + this.greeting;
    } else {
      return Greeter.standardGreeting;
    }
  }
}

const greeter1: Greeter = new Greeter();
console.log(greeter1.greet()); // "Hello, there"

const greeterMaker: typeof Greeter = Greeter; // 클래스 또는 생성자 함수를 가르킴.
greeterMaker.standardGreeting = 'Hey there!';

const greeter2: Greeter = new greeterMaker();
console.log(greeter2.greet()); // "Hey there!"

Greeter.standardGreeting = 'Hi, there!';

const greeter3: Greeter = new greeterMaker();
console.log(greeter3.greet()); // "Hey there!"
