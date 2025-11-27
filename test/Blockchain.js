const { expect } = require('chai');
const { Blockchain, Block } = require('../src/Blockchain');

describe('Blockchain', function() {
  it('should create genesis block', function() {
    const blockchain = new Blockchain();
    expect(blockchain.chain).to.have.lengthOf(1);
    expect(blockchain.chain[0].data).to.equal('Genesis Block');
  });

  it('should add new blocks', function() {
    const blockchain = new Blockchain();
    blockchain.addBlock(new Block('Block 1'));
    blockchain.addBlock(new Block('Block 2'));
    
    expect(blockchain.chain).to.have.lengthOf(3);
    expect(blockchain.chain[1].data).to.equal('Block 1');
    expect(blockchain.chain[2].data).to.equal('Block 2');
  });

  it('should validate correct chain', function() {
    const blockchain = new Blockchain();
    blockchain.addBlock(new Block('Block 1'));
    blockchain.addBlock(new Block('Block 2'));
    
    expect(blockchain.isValid()).to.be.true;
  });

  it('should detect invalid chain', function() {
    const blockchain = new Blockchain();
    blockchain.addBlock(new Block('Block 1'));
    blockchain.addBlock(new Block('Block 2'));
    
    blockchain.chain[1].data = 'Tampered Data';
    
    expect(blockchain.isValid()).to.be.false;
  });
});
