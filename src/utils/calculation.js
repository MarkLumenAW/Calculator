import { evaluate } from "mathjs";

export function calculate(expression) {
  const result = evaluate(expression);

  if (Number.isInteger(result)) {
    if (result.toString().length > 8) { 
      return result.toExponential(0)
    }
    return result.toString();
  }

  if (result.toString().length > 8) {
    return result.toFixed(8).toString();
  } else {
    return result.toString();
  }
}