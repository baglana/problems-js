class BankAccount {
  #balance = 0;

  withdraw(amount: number) {
    if (this.#balance < amount) {
      return -1;
    }
    this.#balance -= amount;
    return this.#balance;
  }

  deposit(amount: number) {
    if (amount > 1_000_000) {
      return -1;
    }
    this.#balance += amount;
    return this.#balance;
  }
}

export default BankAccount;
