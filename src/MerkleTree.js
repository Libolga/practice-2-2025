function concatHashes(a, b) {
  return `Hash(${a} + ${b})`;
}

class MerkleTree {
  constructor(leaves) {
    this.leaves = leaves;
  }

  getConcatLeaves() {
    let currentLevel = this.leaves.slice();
    
    while (currentLevel.length > 1) {
      const nextLevel = [];
      
      for (let i = 0; i < currentLevel.length; i += 2) {
        const left = currentLevel[i];
        const right = currentLevel[i + 1] || left;
        nextLevel.push(concatHashes(left, right));
      }
      
      currentLevel = nextLevel;
    }
    
    return currentLevel[0];
  }

  getProof(index) {
    const proof = [];
    let currentLevel = this.leaves.slice();
    let currentIndex = index;
    
    while (currentLevel.length > 1) {
      const nextLevel = [];
      const isLeft = currentIndex % 2 === 0;
      const siblingIndex = isLeft ? currentIndex + 1 : currentIndex - 1;
      
      if (siblingIndex < currentLevel.length) {
        proof.push({
          hash: currentLevel[siblingIndex],
          left: !isLeft
        });
      }
      
      for (let i = 0; i < currentLevel.length; i += 2) {
        const left = currentLevel[i];
        const right = currentLevel[i + 1] || left;
        nextLevel.push(concatHashes(left, right));
      }
      
      currentLevel = nextLevel;
      currentIndex = Math.floor(currentIndex / 2);
    }
    
    return proof;
  }

  static verifyProof(proof, nodeHash, rootHash) {
    let currentHash = nodeHash;
    
    for (const item of proof) {
      if (item.left) {
        currentHash = concatHashes(item.hash, currentHash);
      } else {
        currentHash = concatHashes(currentHash, item.hash);
      }
    }
    
    return currentHash === rootHash;
  }
}

module.exports = MerkleTree;
