# Leadzen-task-server

A server that provide some api endpoints for fetching data

## Technologies

- Node.js
- Express.js

## All api endpoints

### get users with pagination and search results

```
http://localhost:5000/api/users/all?limit=${}&offset=${}&search=${}
```

Note: limit and offset values are mandatory and search value is optional

### get single user

```
http://localhost:5000/api/users/single/:id
```

Note: The value of id parameter is mandatory

## How to run this project?

First clone the repository to your local machine by copy pest the command in CMD:

```
git clone https://github.com/Tanvin-Ahmed/Leadzen-task-server.git
```

Then run

```
yarn
```

or

```
npm install
```

Then run

```
yarn start
```

or

```
npm start
```
