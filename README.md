# Lock-and-Key
An intro project to demonstrate my understanding of Authorization and Authentication

TODO Today: 

~~ Logout button. useEffect, maybe? have it checking the same stuff as home for already logged in, replacing the register button if credentials exist inside of localStorage. Would replace it to Log Out. Can probably forgo a warning box, not really necessary considering the scope of the project(tiny).

 ~~ Develop the first coding game, catching the Kevin James. Will likely be a javascript animation type of deal, I need to read up a little or watch a video on it. Should be that we have an icon that kinda runs away from the mouse when getting close.

TODO LATER: 

 ~~ Pretty much decided that I'm gonna use localStorage for managing user activity, but it's rather insecure now. Since I can, and already am, passing the tokens down to with requests, I should have the verification procedure run throught those

 ~~ Current issue with localStorage perisisting... well, indefinitely, until otherwise removed. Don't want that. Have to look up how to terminate the localStorage data between sessions(this would be closing the tab or logging out, something like that).

 ~~ Implement a method to increase user permissions. Currently, they are referencing numbers in the database when checking what perms they have, so it would need to increment it. At least, I think its numbers? Its the foreign key that would need to be incremented, but I don't actually know if you can modify that without a load of hoopla. If that doesn't work, I can always reassign the value manually, thats worst case though cus it's gonna take a lot of if statements.

 ~~ Have a display, maybe in the nav bar, that displays your current friend ranking. Possible to do that in client, not server, but I may not want to. It depends if it would make more sense to interpret the number from a call to the server, then database, and then read the info. Or, pass it down from a call, maybe when logging in/registering. Issue with that is more junk in localStorage, which isn't ideal.
 
