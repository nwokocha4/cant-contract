const { whitelist } = require("../lib/NftContractProvider")


async function main() {
    if (await whitelist.whitelistMintEnabled()) {
      await  (await whitelist.setWhitelistMintEnabled(false)).wait();
        
    }
    console.log('whitelist closed')
}

main()
.then(() => process.exit(0))
.catch((error) => {
  console.error(error);
  process.exit(1);
});


module.exports