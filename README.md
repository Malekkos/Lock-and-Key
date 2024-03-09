# Lock-and-Key
An intro project to demonstrate my understanding of Authorization and Authentication


To run:
--clone project
--cd into client, run npm start
--split console/open another
--in second console, cd into server, run npm run server


TODO Today: 

 ~~ Done for today

TODO LATER: 

 ~~ in onClick function in home.js, theres a redudnant use of token. Should remove that.

 ~~ Should add a loading overlay when stuff is running, aka when you register, it seems like nothing is happening while you wait for it to redirect you

 ~~ Add another middleware that checks perm level, if it is at 4, then throw an error detailing why. This would be on the put endpoint

 ~~ Need to have persistent state so Kevin can't be used to farm permissions, also don't want it to be going at all after completing it. I need to look into the React dev stuff, I remember there was a way to persist state across all levels without using something like a localStorage check, but I'm blanking on how to do it. I think its a sign of incompetence to rely on localStorage to do everything for me lol.

 ~~ Pretty much decided that I'm gonna use localStorage for managing user activity, but it's rather insecure now. Since I can, and already am, passing the tokens down to with requests, I should have the verification procedure run throught those

 ~~ Current issue with localStorage perisisting... well, indefinitely, until otherwise removed. Don't want that. Have to look up how to terminate the localStorage data between sessions(this would be closing the tab or logging out, something like that).

 ~~ Have a display, maybe in the nav bar, that displays your current friend ranking. Possible to do that in client, not server, but I may not want to. It depends if it would make more sense to interpret the number from a call to the server, then database, and then read the info. Or, pass it down from a call, maybe when logging in/registering. Issue with that is more junk in localStorage, which isn't ideal.

 ~~ I should have it so that only one test/secret displays on the nav bar. It would make more sense than having them all, with a small hit to replayability but you can quickly make a new account to do that. It would also make not abusing the tests to quickly raise account perms SIGNIFICANTLY easier for me. Don't want to fix an issue like that.
 
