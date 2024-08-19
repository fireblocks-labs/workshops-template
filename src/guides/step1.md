#### Setup & Installation

1. Make sure that you have `npx` installed. If you do not, run:
```bash
npm install npx
```

2. Create a folder for our project. Navigate to your command line and type:

```bash
mkdir my-nft
```

```bash
cd my-nft
```

3. Use `npm init` to initialize the project:
```bash
npm init -y
```

4. Create an API Key in Fireblocks:
  - Login to the [Sandbox Workspace](https://sandbox.fireblocks.io)
  - Click on `Developer Center` on the bottom of the left sidebar
  - Click on `API Users` tab
  - Click on `Add API User`
  - Give a name to the API User
  - Choose the `Editor` role from the Role dropdown
  - Select `Automatic CSR`
  - Click on `Download private key`
  - Click on `Add User`
  - Save the private key file in the previously created `my-nft` directory