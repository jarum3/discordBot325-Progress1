# Jakob Robinson - CSC-325 Discord Bot
This is still just a skeleton, with some files to get basic functionality working.

## .env
This bot requires a .env file, titled `.env` as its full name, with no hidden file extensions, in the root directory of the application, in the same location as package.json

The structure of  that file should look like this:
```
CLIENT_TOKEN='[Token from bot through the discord dev portal]'
CLIENT_ID="[The bot user's ID]"
GUILD_ID="[The server that should receive your list of commands to display to users]"
```