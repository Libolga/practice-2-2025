const { expect } = require('chai');
const MerkleTree = require('../src/MerkleTree');

describe('MerkleTree', function() {
  it('should calculate root hash', function() {
    const leaves = ['A', 'B', 'C', 'D'];
    const tree = new MerkleTree(leaves);
    
    const root = tree.getConcatLeaves();
    expect(root).to.equal('Hash(Hash(Hash(A + B) + Hash(C + D)) + Hash(Hash(A + B) + Hash(C + D)))');
  });

  it('should generate proof', function() {
    const leaves = ['A', 'B', 'C', 'D'];
    const tree = new MerkleTree(leaves);
    
    const proof = tree.getProof(0);
    expect(proof).to.be.an('array');
  });

  it('should verify proof correctly', function() {
    const leaves = ['A', 'B', 'C', 'D'];
    const tree = new MerkleTree(leaves);
    
    const root = tree.getConcatLeaves();
    const proof = tree.getProof(0);
    const isValid = MerkleTree.verifyProof(proof, 'A', root);
    
    expect(isValid).to.be.true;
  });

  it('should reject invalid proof', function() {
    const leaves = ['A', 'B', 'C', 'D'];
    const tree = new MerkleTree(leaves);
    
    const root = tree.getConcatLeaves();
    const proof = tree.getProof(0);
    const isValid = MerkleTree.verifyProof(proof, 'X', root);
    
    expect(isValid).to.be.false;
  });
});
