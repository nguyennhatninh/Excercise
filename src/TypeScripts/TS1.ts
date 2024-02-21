// 1, 2

class Bus {
    make: string;
    model: string;
    year: number;
    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    public start(): void {
        console.log('Bus is starting');
    }
}
const bus = new Bus('Bus', 'N22', 2016);
// bus.start();
// 3 , 4
class Car {
    make: string;
    model: string;
    year: number;
    engine: Engine;
    constructor(make: string, model: string, year: number, engine: Engine) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.engine = engine;
    }
    start(): void {
        console.log(`The Car is starting`);
    }
    printCarDetails(): void {
        console.log(`Car : ${this.make} ${this.model} ${this.year}`);
        console.log(`Engine : Horse power - ${this.engine.horsePower} , Fuel type - ${this.engine.fuelType} `);
    }
}
class Engine {
    horsePower: number;
    fuelType: string;
    constructor(horsePower: number, fuelType: string) {
        this.horsePower = horsePower;
        this.fuelType = fuelType;
    }
}
const engine = new Engine(300, 'Diesel');
const car = new Car('Toyota', 'Camry', 2018, engine);
// car.start();
// car.printCarDetails();

class Suv extends Car {
    isSuitable: boolean;
    constructor(name: string, model: string, year: number, engine: Engine, isSuitable: boolean) {
        super(name, model, year, engine);
        this.isSuitable = isSuitable;
    }
    toggleSuitable(): void {
        this.isSuitable = !this.isSuitable;
        if (this.isSuitable) {
            console.log('The SUV is suitable for off-road driving');
        } else {
            console.log('The SUV is not suitable for off-road driving');
        }
    }
}
const suvEngine = new Engine(500, 'Diesel');
const suv = new Suv('Jeep', 'Wrangler', 2023, suvEngine, false);
// console.log(suv.isSuitable);
// suv.toggleSuitable();

// 5
class Student {
    name: string;
    className: string;
    constructor(name: string, className: string) {
        this.name = name;
        this.className = className;
    }
}
// const student = new Student('ninh', '12A2');
// console.log(student);

// 6
class Student6 {
    name: string;
    rollNumber: unknown;
    constructor(name: string);
    constructor(name: string, rollNumber: unknown);
    constructor(name: string, rollNumber?: unknown) {
        this.name = name;
        this.rollNumber = rollNumber;
    }
}
const student62 = new Student6('nin');
const student61 = new Student6('ninh', 22);
// console.log(student62);

// 7
class Shape {
    color: string;
    constructor(color: string) {
        this.color = color;
    }
}
const shape = new Shape('red');

class Circle extends Shape {
    radius: number;
    constructor(color: string, radius: number) {
        super(color);
        this.radius = radius;
    }
}
const circle = new Circle('red', 22);
// console.log(shape, circle);

// 8
class Student8 {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age > 0 ? age : 0;
    }
}
const student8 = new Student8('ninh', -1);
// console.log(student8);

// 9
class Animal {
    name: string;
    species: string;
    constructor(name: string, species: string) {
        this.name = name;
        this.species = species;
    }
}
const animal = new Animal('Sư tử', 'mèo');
class Tiger extends Animal {
    roar(): void {
        console.log('Tiger is roaring.');
    }
}
const tiger = new Tiger('Hổ', 'mèo');
// tiger.roar();

// 10
class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}
const person = new Person('ninh', 23);
class Employee extends Person {
    employeeID: number;
    constructor(name: string, age: number, employeeID: number) {
        super(name, age);
        this.employeeID = employeeID;
    }
}
const employee = new Employee('ninh', 23, 2212);
// console.log(employee);

// 11
class Shape11 {
    color: string;
    constructor(color: string) {
        this.color = color;
    }
    draw(): void {
        console.log(`The Shape is being drawn`);
    }
}
const shape11 = new Shape11('red');
// shape11.draw();
class Circle11 extends Shape11 {
    constructor(color: string) {
        super(color);
    }
    draw(): void {
        console.log('The Circle is being drawn');
    }
}
const circle11 = new Circle11('blue');
// circle11.draw();

// 12
class Vehicle {
    make: string;
    model: string;
    constructor(make: string, model: string) {
        this.make = make;
        this.model = model;
    }
}
const vehicle = new Vehicle('Yamaha', 'NouvoSX');

class Car12 extends Vehicle {
    constructor(make: string, model: string) {
        super(make, model);
    }
}
const car12 = new Car12('Toyota', 'Camry');
class SportCar extends Car12 {
    constructor(make: string, model: string) {
        super(make, model);
    }
}
const sportCar = new SportCar('redBull', 'SportCar');

// 13
abstract class Animal13 {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    abstract makeSound(): void;
}
class Tiger13 extends Animal13 {
    makeSound(): void {
        console.log('Sound Tiger');
    }
}
const tiger13 = new Tiger13('tiger');
// tiger13.makeSound();
class Lion extends Animal13 {
    makeSound(): void {
        console.log('Sound Lion');
    }
}
const lion = new Lion('lion');
// lion.makeSound();

// 14
abstract class Employee14 {
    name: string;
    employeeID: number;
    constructor(name: string, employeeID: number) {
        this.name = name;
        this.employeeID = employeeID;
    }
    abstract caculateSalary(): number;
}

class FullTimeEmployee extends Employee14 {
    caculateSalary(): number {
        return 40;
    }
}
const fulltimeEmployee = new FullTimeEmployee('ninhft', 2212);
class PartTimeEmployee extends Employee14 {
    caculateSalary(): number {
        return 20;
    }
}
const parttimeEmployee = new PartTimeEmployee('ninhpt', 2212);
// console.log(fulltimeEmployee.caculateSalary(), parttimeEmployee.caculateSalary());

// 15
class Student15 {
    private name: string;
    protected studentID: number;
    constructor(name: string, studentID: number) {
        this.name = name;
        this.studentID = studentID;
    }
    public displayInfo(): void {
        console.log(`Name student : ${this.name} , ID : ${this.studentID}`);
    }
}
const student15 = new Student15('ninh', 210);
// student15.displayInfo();

// 16
class BankAcount {
    private accountNumber: string;
    protected balance: number;
    constructor(accountNumber: string) {
        this.accountNumber = accountNumber;
        this.balance = 0;
    }
    public deposit(amount: number): void {
        this.balance += amount;
    }
    public withdraw(amount: number): void {
        this.balance -= amount;
    }
}
const bankAcount = new BankAcount('112233');
// bankAcount.deposit(20000);
// console.log(bankAcount);

// 17
class Car17 {
    protected make: string;
    protected model: string;
    constructor(make: string, model: string) {
        this.make = make;
        this.model = model;
    }
    public getCarInfo(): string {
        return `Make : ${this.make}, Model : ${this.model}`;
    }
}
const car17 = new Car17('Toyota', 'Camry');
// console.log(car17.getCarInfo());

// 18
class Animal18 {
    protected name: string;
    private age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    public introduce(): string {
        return `name : ${this.name}, age : ${this.age}`;
    }
}
const animal18 = new Animal18('Tom', 6);
// console.log(animal18.introduce());

// 19
class Utility {
    static formatDate(date: Date): string {
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    }
    static generateRandomString(length: number): string {
        let result: string = '';
        const characters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    }
    static capitalizeString(input: string): string {
        return `${input.charAt(0).toUpperCase()}${input.slice(1)}`;
    }
}
// console.log(Utility.generateRandomString(6));
// console.log(Utility.formatDate(new Date()));
// console.log(Utility.capitalizeString('ninh'));

// 20
class Singleton {
    private static instance: Singleton;
    private constructor() {}
    static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
}
const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();
console.log(instance1 === instance2);
