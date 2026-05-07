//  Problem: 01
const numbers: number[] = [1, 2, 3, 4, 5, 6];
const filterEvenNumbers = (value: number[]): number[] => {
  const evenNumber = value.filter((num) => num % 2 == 0);
  return evenNumber;
};
const result = filterEvenNumbers(numbers);

// Problem: 02
const reverseString = (param: string): string => {
  return param.split("").reverse().join("");
};

const reverse = reverseString("typescript");

// Problem 03
type StringOrNumber = string | number;

const checkType = (typeToCheck: StringOrNumber): string => {
  return typeof typeToCheck === "string" ? "String" : "Number";
};
const getType = checkType(0);

// Problem 04
const user = { id: 1, name: "John Doe", age: 21 };

const getProperty = <X>(obj: X, key: keyof X) => {
  return obj[key];
};

const getUsersProperty = getProperty(user, "name");

// Problem 5
const myBook = {
  title: "TypeScript Guide",
  author: "Jane Doe",
  publishedYear: 2024,
};

interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

const toggleReadStatus = (book: Book) => {
  const updatedStatus = { ...book, isRead: true };
  return updatedStatus;
};

const getStatus = toggleReadStatus(myBook);

// Problem 06

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

const student = new Student("Alice", 20, "A");

// Problem: 07

const getIntersection = (arr1: number[], arr2: number[]): number[] => {
  const checkIncludes = arr1.filter((item) => arr2.includes(item));
  return checkIncludes;
};
