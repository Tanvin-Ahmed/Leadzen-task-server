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
