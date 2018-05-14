## Furgo App clone with React Native by Gerard Cabrerizo 

![Video of hte app](https://gfycat.com/HomelyCompassionateDutchshepherddog)

This is a simple clone of the furgo app, simlulating the landing page choosing type of user -> type of auth, and login in or creating a new user. 
Once logged in, goes to the user dashboard, where it can see its projects or create a new one. 
Only the User Authentication part of the backend logic is implemented using Amazon Cognito. 

For the projects part a simple Mockup API could be implemented with twoo endpoints, one to create projects and the other to get all the projects, both for a specific user. 
Then once the dashboard is mounted dispatch a redux action that fetches the data from the API and dispatches another action with the data once it's finished. 
Then the reducer saves that data into the state and it's rendered to the dashboard through props from that connected screen. 


 built using: 

* react-native
* redux, react-redux, redux-thunk, redux-logger
* react-navigation
* react-native-video 
* react-native-navigation-actions*

And for the backend: 

* aws-amplify, aws-amplify-react-native
* amazon cognito 

Bootrsapped with [Create React Native App](https://github.com/react-community/create-react-native-app).



* ##react-native-navigation-actions:  
Used to be able to navigate within a Redux action without having to integrate react-navigation and redux together. 

## Screens 
`<./app/screens/UserChoice>`

![home](https://imgur.com/ay6BUuD)

