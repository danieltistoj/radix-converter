
export function decimalToBinary(decimal: number): string {
    if (!Number.isInteger(decimal)) {
      throw new Error("The number must be an integer");
    }
    
    if (decimal < 0) {
      return (decimal >>> 0).toString(2);
    }
    
    return decimal.toString(2);
  }