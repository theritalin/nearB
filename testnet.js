const nearA = require("near-api-js");
const { wait } = require("reeta");

const rpc =
  "https://near-testnet.lava.build/lava-referer-d4b2cdc9-d946-4190-87e6-15eb37403168/";
const signerName = "NAME";
const PRIVATE_KEY = "KEY";

const keyPair = nearA.utils.KeyPair.fromString(PRIVATE_KEY);
const myKeyStore = new nearA.keyStores.InMemoryKeyStore();

async function get() {
  await myKeyStore.setKey("testnet", signerName, keyPair);

  const connectionConfig = {
    networkId: "testnet",
    keyStore: myKeyStore, // first create a key store
    nodeUrl: rpc,
    walletUrl: "https://testnet.mynearwallet.com/",
    helperUrl: "https://helper.testnet.near.org",
    explorerUrl: "https://testnet.nearblocks.io",
  };
  const nearConnection = await nearA.connect(connectionConfig);
  const account = await nearConnection.account(signerName);

  for (i = 0; i < 10; i++) {
    await account
      .sendMoney(
        signerName, // receiver account
        "10000000000000000000" // amount in yoctoNEAR
      )
      .then(() => {
        console.log("Success");
      });
    let balance = await account.getAccountBalance();
    console.log(`Balance: ${balance.available}`);
    await wait(20000);
  }
}

get();
