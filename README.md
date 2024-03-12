<h1 align="center"> Near Self Send Bot </h1>

### Installation

1. Clone the repository:

```bash
  git clone https://github.com/theritalin/nearBot.git
```

2. Navigate to the project directory:

```bash
  cd nearBot
```

3. Install required npm packages:

```bash
 npm install
```

### Usage

1. Write your rpc, private key and account name;

```bash
const rpc =
  "https://near-testnet.lava.build/lava-referer-d4b2cdc9-d946-4190-87e6-15eb37403168/";
const signerName = "thertln.testnet";
const PRIVATE_KEY =
  "";
```

2. In your terminal, For mainnet:

```bash
  node index.js
```

2. In your terminal, For testnet:

```bash
  node testnet.js
```
