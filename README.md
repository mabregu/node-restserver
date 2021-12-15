# WebServer + RestServer

> Test API with users
  
## Get Start

You have to run ``` npm i ``` to install all the dependencies.
And then run ``` npm run dev ``` to start the server.

## Config

Remember to create your file with environment variables.
``` .env ```
For this I leave you an example.
``` .env.example ```

## Routes

| Endpoint | HTTP | Description |
| --- | --- | --- |
| `/api/users` | GET | Retrieve all the users |
| `/api/users/:id` | GET | Retrieve a specific user with `id` |
| `/api/users` | POST | Create a new user |
| `/api/users/:id` | PUT | Update a existing user |
| `/api/users/:id` | DELETE | Remove a user |

## License
MIT (c) Martin Abregú