const nearA = require("near-api-js");
const { wait } = require("reeta");

///CHANGE FROM HERE
const rpc =
  "https://near.lava.build/lava-referer-d4b2cdc9-d946-4190-87e6-15eb37403168/";
const signerName = "thertln.near";
const PRIVATE_KEY = "KEY";

/// TO HERE

const keyPair = nearA.utils.KeyPair.fromString(PRIVATE_KEY);
const myKeyStore = new nearA.keyStores.InMemoryKeyStore();

async function get() {
  await myKeyStore.setKey("mainnet", signerName, keyPair);

  const connectionConfig = {
    networkId: "mainnet",
    keyStore: myKeyStore, // first create a key store
    nodeUrl: rpc,
    walletUrl: "https://wallet.mainnet.near.org",
    helperUrl: "https://helper.mainnet.near.org",
    explorerUrl: "https://nearblocks.io",
  };
  const nearConnection = await nearA.connect(connectionConfig);
  const account = await nearConnection.account(signerName);

  for (i = 0; i < 10; i++) {
    await account.sendMoney(
      signerName, // receiver account
      "10000000000000000000" // amount in yoctoNEAR
    );

    let balance = await account.getAccountBalance();
    console.log(`Balance: ${balance.available}`);
    await wait(20000);
  }
}

get();
