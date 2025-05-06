# radix-converter 🔢

Numeric converter for decimal to binary. Supports negative numbers (two's complement).

## Installation

### npm
```bash
npm install radix-converter
```

### Yarn
```bash
yarn add radix-converter
```

## Basic Usage
```typescript
import { 
  decimalToBinary,
} from 'radix-converter';

// Decimal (10) → Binary
decimalToBinary(10);    // '1010'
decimalToBinary(-10);   // '11111111111111111111111111110110' (two's complement)
```

## Full API

### Direct functions
| Function                    | Description                          | Example                       |
|-----------------------------|--------------------------------------|-------------------------------|
| decimalToBinary(n: number)  | Decimal → Binary                     | decimalToBinary(8) → '1000'   |


## Error Handling
```typescript
import
try {
  decimalToBinary(3.14); // Error! Only integers allowed
} catch (err) {
  console.log(err.message); // "The number must be an integer"
}
```
## Supported Types
- **Negatives**: Use two's complement in binary
- **Bases**: 2 (binary), 8 (octal), 10 (decimal), 16 (hex)
- **Formats**: Strings (for non-decimal bases), Numbers (for decimal)
