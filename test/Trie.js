const { expect } = require('chai');
const { Trie } = require('../src/Trie');

describe('Trie', function() {
  it('should insert words', function() {
    const trie = new Trie();
    
    trie.insert('hello');
    trie.insert('world');
    
    expect(trie.contains('hello')).to.be.true;
    expect(trie.contains('world')).to.be.true;
  });

  it('should not find non-inserted words', function() {
    const trie = new Trie();
    
    trie.insert('hello');
    trie.insert('world');
    
    expect(trie.contains('test')).to.be.false;
    expect(trie.contains('word')).to.be.false;
  });

  it('should handle prefix words', function() {
    const trie = new Trie();
    
    trie.insert('cat');
    trie.insert('category');
    
    expect(trie.contains('cat')).to.be.true;
    expect(trie.contains('category')).to.be.true;
    expect(trie.contains('categor')).to.be.false;
  });
});
