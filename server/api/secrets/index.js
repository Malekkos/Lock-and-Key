
// THOUGHTS: Is this secure? I don't actually know, but since this is open source does it really matter? It's a test project anyway haha
// cont:  like 90% certain you would keep this in a .env file, but who knows.
// DESC: Simple place to hold my secret for my token and the rounds I'm using.
module.exports = {
  JWT_SECRET: process.env.JWT_SECRET || "d9djfas#@!FNDadpovmasd",
  BCRYPT_ROUNDS: process.env.BCRYPT_ROUNDS || 8,
}