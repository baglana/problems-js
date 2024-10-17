class Calculator {
  #result: number;

  constructor(initValue = 0) {
    this.#result = initValue;
  }

  add(num: number) {
    this.#result += num;
    return this;
  }

  subtract(num: number) {
    this.#result -= num;
    return this;
  }

  divide(num: number) {
    if (num === 0) {
      throw new Error("cannot divide by 0");
    }
    this.#result /= num;
    return this;
  }

  multiply(num: number) {
    this.#result *= num;
    return this;
  }

  logResult() {
    console.log(this.#result);
    return this;
  }
}

export default Calculator;
