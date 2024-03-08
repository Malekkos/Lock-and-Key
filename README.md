# Lock-and-Key
An intro project to demonstrate my understanding of Authorization and Authentication

TODO Today: 

 ~~ Implement a method to increase user permissions. Currently, they are referencing numbers in the database when checking what perms they have, so it would need to increment it. At least, I think its numbers? Its the foreign key that would need to be incremented, but I don't actually know if you can modify that without a load of hoopla. If that doesn't work, I can always reassign the value manually, thats worst case though cus it's gonna take a lot of if statements.

TODO LATER: 

 ~~ Add another middleware that checks perm level, if it is at 4, then throw an error detailing why. This would be on the put endpoint

 ~~ Need to have persistent state so Kevin can't be used to farm permissions, also don't want it to be going at all after completing it. I need to look into the React dev stuff, I remember there was a way to persist state across all levels without using something like a localStorage check, but I'm blanking on how to do it. I think its a sign of incompetence to rely on localStorage to do everything for me lol.

 ~~ Pretty much decided that I'm gonna use localStorage for managing user activity, but it's rather insecure now. Since I can, and already am, passing the tokens down to with requests, I should have the verification procedure run throught those

 ~~ Current issue with localStorage perisisting... well, indefinitely, until otherwise removed. Don't want that. Have to look up how to terminate the localStorage data between sessions(this would be closing the tab or logging out, something like that).

 ~~ Have a display, maybe in the nav bar, that displays your current friend ranking. Possible to do that in client, not server, but I may not want to. It depends if it would make more sense to interpret the number from a call to the server, then database, and then read the info. Or, pass it down from a call, maybe when logging in/registering. Issue with that is more junk in localStorage, which isn't ideal.

 ~~ I should have it so that only one test/secret displays on the nav bar. It would make more sense than having them all, with a small hit to replayability but you can quickly make a new account to do that. It would also make not abusing the tests to quickly raise account perms SIGNIFICANTLY easier for me. Don't want to fix an issue like that.
 
