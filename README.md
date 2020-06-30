# zemoga-ui-test
Zemoga Test for Web UI Developer position

#### The exercise was built using ReactJs, the repository has three branches:
1. layout-html-css: It has the basic layout structure of the main page.
2. Interaction-JS: It has the ReactJs implementation of the exercise, including the NodeJs part.
3. Nodejs: It has the same content than Interaction-JS (left it just for fun).

#### Executing the excercise
The main folder has the client folder and the server folder, the client excercise needs the server to be up and running.
In order to execute the exercises, we need to execute te command `npm start` in every folder, the server uses the port 5000 and the client the port 3000.

#### API endpoints
1. get /users  Lists the users registered
2. post /signup  Create a new user
3. post /updateUser  Update a registered user
4. get /user/:username  Select a user by its username
5. get /votesbyuser/:username  Shows votes x user

#### User Schema
`    {username, password, age, marriage_status}`
