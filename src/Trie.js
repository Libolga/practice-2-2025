class TrieNode {
  constructor(key) {
    this.key = key;
    this.children = {};
    this.isWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode(null);
  }

  insert(word) {
    let current = this.root;
    
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      
      if (!current.children[char]) {
        current.children[char] = new TrieNode(char);
      }
      
      current = current.children[char];
    }
    
    current.isWord = true;
  }

  contains(word) {
    let current = this.root;
    
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      
      if (!current.children[char]) {
        return false;
      }
      
      current = current.children[char];
    }
    
    return current.isWord;
  }
}

module.exports = { Trie, TrieNode };
