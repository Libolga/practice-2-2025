const { expect } = require('chai');
const { Tree } = require('../src/Tree');

describe('Tree', function() {
  it('should add nodes to tree', function() {
    const tree = new Tree();
    
    tree.addNode(5);
    tree.addNode(3);
    tree.addNode(7);
    
    expect(tree.hasNode(5)).to.be.true;
    expect(tree.hasNode(3)).to.be.true;
    expect(tree.hasNode(7)).to.be.true;
  });

  it('should find existing nodes', function() {
    const tree = new Tree();
    
    tree.addNode(10);
    tree.addNode(5);
    tree.addNode(15);
    
    expect(tree.hasNode(10)).to.be.true;
    expect(tree.hasNode(5)).to.be.true;
    expect(tree.hasNode(15)).to.be.true;
  });

  it('should not find non-existing nodes', function() {
    const tree = new Tree();
    
    tree.addNode(10);
    tree.addNode(5);
    
    expect(tree.hasNode(15)).to.be.false;
    expect(tree.hasNode(20)).to.be.false;
  });
});
