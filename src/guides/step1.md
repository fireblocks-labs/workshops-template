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

Run in the root directory `/my-nft`:
```bash
openssl req -new -newkey rsa:4096 -nodes -keyout fireblocks_secret.key -out fireblocks.csr -subj '/O=Workshop'
```

Now you have 2 additional files in the my-nft directory:
1. `fireblocks_csr` - A public CSR file
2. `fireblocks_secret.key` - A secret RSA key file

Follow the steps below:
  - Login to the [Sandbox Workspace](https://sandbox.fireblocks.io)
  - Click on `Developer Center` on the bottom of the left sidebar (clickthrough the inital wizard and ignore the first API key that is being created)
  - Click on `API Users` tab
  - Click on `Add API User`
  - Give a name to the API User
  - Choose the `Editor` role from the Role dropdown
  - Select `Custom CSR`
  - Upload the `fireblocks.csr` file
  - Click on `Add User`
  - Copy the API key value from the `ID` column

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