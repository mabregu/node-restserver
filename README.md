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
| `/api/users` | GET | Retrieve all the products |
| `/api/users/:slug` | GET | Retrieve a specific product with `slug` |
| `/api/users` | POST | Create a new product |
| `/api/users/:slug` | PUT | Update a existing product |
| `/api/users/:slug` | DELETE | Remove a product |

## License
MIT (c) Martin Abregú