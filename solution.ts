//  Problem: 01

const filterEvenNumbers = (value: number[]): number[] => {
  const evenNumber = value.filter((num) => num % 2 == 0);
  return evenNumber;
};

// Problem: 02
const reverseString = (param: string): string => {
  return param.split("").reverse().join("");
};

// Problem 03
type StringOrNumber = string | number;

const checkType = (typeToCheck: StringOrNumber): string => {
  return typeof typeToCheck === "string" ? "String" : "Number";
};

// Problem 04

const getProperty = <X, K extends keyof X>(obj: X, key: K): X[K] => {
  return obj[key];
};

// Problem 5

interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

const toggleReadStatus = (book: Book): Book & { isRead: boolean } => {
  const updatedStatus = { ...book, isRead: true };
  return updatedStatus;
};

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

// Problem: 07

const getIntersection = (arr1: number[], arr2: number[]): number[] => {
  const checkIncludes = arr1.filter((item) => arr2.includes(item));
  return checkIncludes;
};
