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

4. Install some packages:
```bash
npm install dotenv fs
``` 

5. Create an API Key in Fireblocks:
If it's your first time in the Sandbox workspace, click on "Developer Center" and follow the wizard to create the first API key. 

If you do not have the wizard, follow the steps below:
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

6. Create a `.env` file in the root directory (`/my-nft`):
```bash
FIREBLOCKS_API_KEY=<your_api_key>
FIREBLOCKS_SECRET_KEY_PATH="<path_to_your_api_secret>"
```

An example file would look like this:
```bash
FIREBLOCKS_API_KEY=07daad66-c882-4d0e-9311-f744dd22fc61
FIREBLOCKS_SECRET_KEY_PATH="./fireblocks_secret.key"
```