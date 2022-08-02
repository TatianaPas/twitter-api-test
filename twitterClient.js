const {TwitterApi} = require("twitter-api-v2");

const client = new TwitterApi ({
    appKey:"mOj5Yi46PGUSQjSdtuMPdF10B",
    appSecret:"OegsU28B5hMukzQyMfiRjwitxaRVGxQmelggIDoxZnYtvrdmNr",
    accessToken: "1553839692197822464-TIZNn3eqUJ0yZgsjdmwJbgsRZZAGCI",
    accessSecret: "rNDwXrUNtSHkGIvtIrMweFVJ7Tp6fxzmpIlZnywvraGKC"
})



const rwClient = client.readWrite

module.exports = rwClient

