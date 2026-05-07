_Why is any labeled a "type safety hole," and why is unknown the safer choice for handling unpredictable data? Explain the concept of type narrowing._

# Generics in TypeScript

Generics in typescript lets us write reuseable code that keeps the types safe. Instead of fixed data type, generics let us use any type keeping everything strongly typed.

when we don't want to write same type for different functions it is very useful as it works dynamically

### Example Code:

```
function identity<T>(value: T): T {
  return value;
}

console.log(identity<string>("Hello"));
console.log(identity<number>(10));

```

In this sample code above <T> is a placeholder type. When we use function it gets replaced by actual type

### Why we use Generic

- Single function can work for many types
- Still keeps type safety
- Reduces code duplications

### Conclusion

Generics makes typescript codes reuseable and flexible without losing safety
