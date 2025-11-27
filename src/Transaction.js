const crypto = require('crypto');

class Transaction {
  constructor(from, to, value) {
    this.from = from;
    this.to = to;
    this.value = value;
    this.spent = false;
    this.hash = this.calculateHash();
  }

  calculateHash() {
    return crypto
      .createHash('sha256')
      .update(this.from + this.to + this.value + this.spent)
      .digest('hex');
  }

  spend() {
    if (this.spent) {
      throw new Error('Already spended!');
    }
    this.spent = true;
  }
}

module.exports = Transaction;
