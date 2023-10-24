// Update it as much as you want, just don't change the names

interface Withdrawable {
  withdraw(amount: number): void;
}

export class BankAccount implements Withdrawable {
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

  showBalance() {
    console.log('Balance:', this.#balance);
  }
}

interface Sendable {
  sendMail(recipient: string): void;
}

export class FedexAccount implements Sendable {
  sendMail(recipient: string) {
    console.log(`Sent mail to ${recipient}`);
  }

  receiveMail(sender: string) {
    console.log(`Received mail from ${sender}`);
  }
}

export class KazPostAccount
    extends BankAccount
    implements  Withdrawable, Sendable {
  sendMail(recipient: string) {
    console.log(`Sent mail to ${recipient}`);
  }

  receiveMail(sender: string) {
    console.log(`Received mail from ${sender}`);
  }
}

export function withdrawMoney(accounts: Withdrawable[], amount: number) {
  for (const account of accounts) {
    account.withdraw(amount);
  }
}

export function sendLetterTo(accounts: Sendable[], recipient: string) {
  for (const account of accounts) {
    account.sendMail(recipient);
  }
}

const normanOsborne = new BankAccount();
const peterParker = new FedexAccount();
const auntMay = new KazPostAccount();

auntMay.deposit(70);
auntMay.showBalance();

withdrawMoney([normanOsborne, auntMay], 10); // no error

auntMay.showBalance();

sendLetterTo([peterParker, auntMay], "Mary Jane"); // no error

// withdrawMoney([peterParker, auntMay], 10); // peterParker error
