class BankAccount {
    #balance = 0;

    withdraw(amount: number) {
        if (amount <= this.#balance) {
            this.#balance -= amount
            return this.#balance;
        }
        return -1;
    }

    deposit(amount: number) {
        if (amount <= 1_000_000) {
            this.#balance += amount;
            return this.#balance;
        }
        return -1;
    }
}

export default BankAccount;
