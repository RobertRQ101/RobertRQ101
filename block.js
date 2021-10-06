/**
 * Import crypto-js and use SHA256 library
 */
const cryptoJs = require('crypto-js');
const { v4: uuidv4 } = require('uuid');
/**
 * Class with a constructor for block 
 */
class Block {

	constructor(data){
		this.id = this.generateId();
    this.nonce = cryptoJs.SHA256(Math.random());
    this.body = data;
    this.hash = "";
  }
    
    /**
     * Step 1. Implement `generateHash()`
     * method that return the `self` block with the hash.
     * 
     * Create a Promise that resolve with `self` after you create 
     * the hash of the object and assigned to the hash property `self.hash = ...`
     */
  	// 

    generateHash(){
      let self = this;
      self.hash = cryptoJs.SHA256(JSON.stringify(self));
      return self;
    }

    generateId(){
      let self = this;
      self.id = uuidv4();
      return self.id;
    }
}

// Exporting the class Block to be reuse in other files
module.exports.Block = Block;