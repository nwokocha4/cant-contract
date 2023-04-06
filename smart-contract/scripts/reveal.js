const { whitelist } = require('../lib/NftContractProvider')
require("dotenv").config();

const COLLECTION_URI_PREFIX = process.env.COLLECTION_URI_PREFIX;

async function main() {
  if (undefined === COLLECTION_URI_PREFIX || COLLECTION_URI_PREFIX === 'ipfs://__CID___/') {
    throw '\x1b[31merror\x1b[0m ' + 'Please add the URI prefix to the ENV configuration before running this command.';
  }


  // Update URI prefix (if changed)
  if ((await whitelist.uriPrefix()) !== COLLECTION_URI_PREFIX) {
    console.log(`Updating the URI prefix to: ${COLLECTION_URI_PREFIX}`);

    await (await whitelist.setUriPrefix(COLLECTION_URI_PREFIX)).wait();
  }
  
  // Revealing the collection (if needed)
  if (!await whitelist.revealed()) {
    console.log('Revealing the collection...');

    await (await whitelist.setRevealed(true)).wait();
  }

  console.log('Your collection is now revealed!');
}


// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
.then(() => process.exit(0))
.catch((error) => {
  console.error(error);
  process.exit(1);
});

module.exports