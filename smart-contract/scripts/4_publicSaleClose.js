const { whitelist } = require('../lib/NftContractProvider')



async function main() {
    if (!await whitelist.paused()) {
        console.log('dsiabling public sale...')
        await (await whitelist.setPaused(true)).wait()
    }

    console.log("public sale disabled")
}


main()
.then(() => process.exit(0))
.catch((error) => {
  console.error(error);
  process.exit(1);
});

module.exports