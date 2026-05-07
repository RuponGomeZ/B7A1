_Q: How do Pick and Omit utility types prevent code duplication while creating specialized "slices" of a master interface? Discuss how this keeps your code DRY (Don't Repeat Yourself)._

# `Pick` and `Omit`

`Pick` and `Omit` are utility types in `TypeScript`. They let us create new types from existing ones without rewriting everything.
This follows DRY principle ( Don't Repeat Yourself).

### Example Code:

```typescript
interface User {
  id: number;
  name: string;
  age: number;
  email: string;
}
```

### Using Pick:

We select the needed properties.

```typescript
type UserBasic = Pick<User, "id" | "name">;

const user1: UserBasic = {
  id: 1,
  name: "John",
};
```

### Using Omit:

We remove unwanted properties.

```typescript
type UserWithoutEmail = Omit<User, "email">;

const user2: UserWithoutEmail = {
  id: 2,
  name: "Alice",
  age: 22,
};
```

### Why we use it

- Avoids rewriting interfaces.
- Keeps code cleaner.
- Help managing large projects easily.

### Conclusion

Pick and Omit help you reuse types and keep your code clean and organized.
