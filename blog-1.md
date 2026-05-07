_Why is any labeled a "type safety hole," and why is unknown the safer choice for handling unpredictable data? Explain the concept of type narrowing._

# Generics in TypeScript

Generics in typescript lets us write reuseable code that keeps the types safe. Instead of fixed data type, generics let us use any type keeping everything strongly typed.

when we don't want to write same type for different functions it is very useful as it works dynamically

Example Code:

````
const user = { id: 1, name: "John Doe", age: 21 };
const getProperty = <X>(obj: X, key: keyof X) => {
return obj[key];
};
const getUsersProperty = getProperty(user, "name");```

````
