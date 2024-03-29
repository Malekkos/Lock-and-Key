# Lock-and-Key
An intro project to demonstrate my understanding of Authorization and Authentication

To run:
````

1. clone project

2. cd into client, run npm start
  2a cd client

3. split console/open another

4. in second console, cd into server, run npm run server
  4a. cd server
    4b. npm run server

````

TODO Today: 

 ~~ Develop the second game

 ~~ Have a display, maybe in the nav bar, that displays your current friend ranking. Possible to do that in client, not server, but I may not want to. It depends if it would make more sense to interpret the number from a call to the server, then database, and then read the info. Or, pass it down from a call, maybe when logging in/registering. Issue with that is more junk in localStorage, which isn't ideal.
 ~~ conjuction with top issue: Since I am bringing down the friend ranking, I can also make it so that depending on the friend ranking, only one test will be accessible, aka having a conditional checker for the links that would make them disabled or something.

TODO LATER: 

 ~~ Need to have persistent state so Kevin can't be used to farm permissions, also don't want it to be going at all after completing it. I need to look into the React dev stuff, I remember there was a way to persist state across all levels without using something like a localStorage check, but I'm blanking on how to do it. I think its a sign of incompetence to rely on localStorage to do everything for me lol.

 ~~ Currently, any input for registering an account is accepted; this is dumb. Need to set some min req's, as well as some max's.

 ~~ Get into changing the css styling to conform to smaller devices

 ~~ Add disability compatibility. Need to check the guidelines for that stuff.