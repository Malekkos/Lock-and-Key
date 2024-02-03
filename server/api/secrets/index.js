
// THOUGHTS: Is this secure? I don't actually know, but since this is open source does it really matter? It's a test project anyway haha
// DESC: Simple place to hold my secret for my token and the rounds I'm using. This would be kept in a .env, typically.
module.exports = {
  JWT_SECRET: process.env.JWT_SECRET || "d9djfas#@!FNDadpovmasd",
  BCRYPT_ROUNDS: process.env.BCRYPT_ROUNDS || 8,
}