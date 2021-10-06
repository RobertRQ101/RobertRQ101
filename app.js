/**
 * Importing the Block class
 */
//
const BlockClass = require('./block.js');
/**
 * Creating a block object
 */
const block = new BlockClass.Block("Test Block");

var promise = new Promise(function(resolve, reject) {
	let blockGen = block.generateHash();
  
	if (blockGen) {
	  resolve(blockGen);
	} else {
	  reject(Error("It broke"));
	}
  });

// Generating the block hash
promise.then((result) => {
	console.log(`Block Hash: ${result.hash}`);
	console.log(`Block: ${JSON.stringify(result)}`);
}).catch((error) => {console.log(error)});

/**
 * Step 3: Run the application in node.js
 * 
 */

// From the terminal: cd into Project folder
// From the terminal: Run node app.js to run the code
function exit(){
	return process.kill(process.pid, 'SIGTERM');
}