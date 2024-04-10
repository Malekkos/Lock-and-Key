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

 ~~ Start working on the new minigame, goal is to make it a whack-a-mole clone

TODO LATER: 

 ~~ Add redirects to pages where you aren't supposed to be.

 ~~ Okay, so, the issue was because the frontend was a static site. I get that now. New issue; I'm getting network errors when I try to hit my endpoints using login and register. I have an idea of what I could do to fix that, which making the actions asynchronous. I've noticed when loading into the page, it takes milennia, so im thinking that its trying to resolve something on my page without actually being finished with its call, hence the network error.

 ~~ Persistent state would still be cool & ideal, but we dont have to worry about farming permissions anymore.

 ~~ Currently, any input for registering an account is accepted; this is dumb. Need to set some min req's, as well as some max's.

 ~~ Get into changing the css styling to conform to smaller devices

 ~~ Add disability compatibility. Need to check the guidelines for that stuff.

  ~~ Kevin james PNG quest is bugged(kinda), he spawns at the bottom on first render(locally). Should do a hard move to the middle so that wont happen