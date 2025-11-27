const { expect } = require('chai');
const Transaction = require('../src/Transaction');

describe('Transaction', function() {
  it('should create transaction with correct fields', function() {
    const tx = new Transaction('Alice', 'Bob', 100);
    
    expect(tx.from).to.equal('Alice');
    expect(tx.to).to.equal('Bob');
    expect(tx.value).to.equal(100);
    expect(tx.spent).to.be.false;
    expect(tx.hash).to.be.a('string');
  });

  it('should spend transaction once', function() {
    const tx = new Transaction('Alice', 'Bob', 100);
    
    tx.spend();
    expect(tx.spent).to.be.true;
  });

  it('should throw error when spending twice', function() {
    const tx = new Transaction('Alice', 'Bob', 100);
    
    tx.spend();
    expect(() => tx.spend()).to.throw('Already spended!');
  });
});
