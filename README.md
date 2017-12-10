# random-reply-bot
A Discord Bot which gives a random reply (from a predefined list) when mentioned.


## Installation

Clone Repo
```
$ git clone https://github.com/druz320/random-reply-bot.git && cd random-reply-bot
```

Copy example configuration
```
$ cp config.json.example settings/config.json
$ cp replies.json.example settings/replies.json
```

In `settings/config.json`, replace `<bot token>` with your bot token.

If you want to, you can edit `settings/replies.json` now or you can do it later when the bot is running.

You can run the bot inside a Docker container or directly on your system.

### Without Docker

Install the required dependencies
```
$ npm install
```

Run the bot
```
$ npm start
```

### With Docker

Build image
```
$ sudo docker build -t <image name> .
```
`<image name>` is the name you want to give to your Docker image.

Run image
```
$ sudo docker run -d \
    --restart unless-stopped \
    -v </path/to/settings>:/bot/settings \
    <image name>
```
`</path/to/settings>` is the directory where you want the bot configuration to be stored.

Now you can edit `</path/to/settings>/replies.json` to add new replies.
