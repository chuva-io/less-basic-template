- [Less Website](https://bit.ly/less-framework)
- [Less Developer Documentation](https://chuva-io.notion.site/Developer-documentation-ddbab90913494721b58eca81b3fb7552)

# Introduction
Use this template to get started quickly with Less. It has examples of all of the resources you can create already configured.

- **REST API**: REST API with GET and POST methods.
- **Web Socket**: Socket that publishes connection info to a topic.
- **CRON job**: Use Shared module to create messages periodically.
- **Publisher/Subscriber**: Send messages to newly connected socket clients.
- **Shared module**: Create messages.

Less is a framework that radically reduces software development costs, complexity, and time to develop. Simply write your code and deploy. 

Less will deploy your project to AWS giving you distributed, infinitely scalable, event-driven, realtime, and fault tolerant systems without you ever having to deal with cloud providers, infrastructure, containers, or DevOps.

What's crazy is that this is all done in ~75 lines of code!

---

# Steps to deploy
1. Clone the repo.
```
git clone git@github.com:chuva-io/less-basic-template.git
cd less-basic-template
```

2. Export your Less token.
```
export LESS_TOKEN="{YOUR_LESS_TOKEN}"
export CRON_SAY_HELLO="*/5 * * * ? *" # every 5 minutes
```

3. Deploy.
```
npx @chuva.io/less-cli deploy less-basic-template
```

---

# Testing your project
**GET with query param**
```
curl https://YOUR_API.execute-api.eu-west-1.amazonaws.com/production/hello\?name\=Friend
```

**GET with path param**
```
curl https://YOUR_API.execute-api.eu-west-1.amazonaws.com/production/hello/Friend
```

**POST with body**
```
curl --request POST \
  --url https://YOUR_API.execute-api.eu-west-1.amazonaws.com/production/hello \
  --data '{
    "name": "Friend"
}'
```

**Web Socket connection**
```
wscat -c wss://YOUR_WEB_SOCKET.execute-api.eu-west-1.amazonaws.com/production
```
