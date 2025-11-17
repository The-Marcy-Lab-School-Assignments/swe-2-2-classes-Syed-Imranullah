class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
  getArea() {
    return this.length * this.width;
  }
  getPerimeter() {
    return 2 * (this.length + this.width);
  }
  isSquare() {
    return this.length === this.width;
  }
}

class Vehicle {
  constructor(type, capacity, color = "black") {
    this.type = type;
    this.capacity = capacity;
    this.color = color;
    this.passengers = [];
  }
  paint(newColor) {
    this.color = newColor;
    return this.color;
  }
  addPassenger(name) {
    if (this.passengers.length < this.capacity) {
      this.passengers.push(name);
      return this.passengers.length;
    } else {
      return -1;
    }
  }
}

class PasswordManager {
  #password;

  constructor(password) {
    this.#password = password;
  }
  checkPassword(attempt) {
    return attempt === this.#password;
  }

  setPassword(oldPassword, newPassword) {
    if (oldPassword === this.#password) {
      this.#password = newPassword;
      return true;
    } else return false;
  }
}

class TodoList {
  #item;
  constructor(title) {
    this.title = title;
    this.#item = [];
  }
  addItem(description) {
    this.#item.push(description);
    return this.#item.length;
  }
  removeItem(description) {
    const index = this.#item.indexOf(description);
    if (index !== -1) {
      return this.#item.splice(index, 1)[0];
    }
    return null;
  }
  getItems() {
    return [...this.#item];
  }
}

class BankAccount {
  #balance;
  static #totalHoldings = 0;
  constructor(firstName, lastName, balance = 0) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.#balance = balance;
    BankAccount.#totalHoldings += balance;
  }
  deposit(amount) {
    this.#balance += amount;
    BankAccount.#totalHoldings += amount;
    return `Your balance is $${this.#balance.toFixed(2)}`;
  }
  withdraw(amount) {
    if (amount > this.#balance) {
      return "You do not have enough funds.";
    }
    this.#balance -= amount;
    BankAccount.#totalHoldings -= amount;
    return `Your balance is $${this.#balance.toFixed(2)}.`;
  }
  showBalance() {
    return `Your balance is $${this.#balance.toFixed(2)}`;
  }
  static getTotalHoldings() {
    return BankAccount.#totalHoldings;
  }
}

module.exports = {
  Rectangle,
  Vehicle,
  PasswordManager,
  TodoList,
  BankAccount,
};
