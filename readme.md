
# ant-invariant
A lightweight TypeScript utility for runtime condition checks using invariant patterns. 
Ant-Invariant ensures your conditions are met at runtime and throws meaningful errors otherwise.

## Features

- **TypeScript support**: Utilizes `asserts` for type narrowing.
- **Lightweight**: Simple and minimal with no external dependencies.
- **Runtime checks**: Ensure that required conditions are met during runtime.

---

## Install
Install `ant-invariant` via npm or yarn:
```bash
# Using npm
npm install ant-invariant

# Using yarn
yarn add ant-invariant
```

## Example
```typescript
import { invariant } from 'ant-invariant';

interface Product {
    id: number;
    name: string;
    price: number;
}

function validateProduct(product: unknown): asserts product is Product {
    invariant(
        typeof product === "object" && product !== null,
        "Product must be a non-null object"
    );
    invariant("id" in product && typeof product.id === "number", "Product must have a numeric 'id'");
    invariant("name" in product && typeof product.name === "string", "Product must have a string 'name'");
    invariant("price" in product && typeof product.price === "number", "Product must have a numeric 'price'");
}
```