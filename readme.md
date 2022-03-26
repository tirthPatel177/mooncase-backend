<h1 align="center">
  	<span>Mooncase-Apis</span>
  	<svg width="27" height="27" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" fill="#71c549"><path d="M8.816 1.321c.815-.816 1.941-1.321 3.184-1.321 1.251 0 2.384.512 3.2 1.338 4.056.308 5.687 1.739 7.382 8.486.664.463 1.418 1.436 1.418 3.489 0 1.765-.986 3.991-3.139 4.906-2.348 3.731-5.484 5.781-8.861 5.781-3.377 0-6.513-2.05-8.862-5.781-2.153-.915-3.138-3.141-3.138-4.906 0-2.053.753-3.026 1.417-3.489 1.732-6.779 3.38-8.213 7.399-8.503zm5.584 16.679h-4.8c.004.012.682 1.884 2.4 1.884 1.782 0 2.396-1.872 2.4-1.884zm5.235-11h-3.894c-.807 1.206-2.182 2-3.741 2-1.559 0-2.934-.794-3.741-2h-3.923c-.222.631-.412 1.304-.58 2-.179.746.964.954.917 1.733-.044.722-.76.953-1.421.661-.184-.082-.469-.079-.673.053-1 .651-.893 4.184 1.554 5.012 1 .339 2.579 3.361 4.288.432.591-1.012 2.455-1.126 3.579-.322 1.123-.804 2.988-.69 3.578.322 1.709 2.929 3.288-.093 4.288-.432 2.448-.828 2.554-4.361 1.554-5.012-.235-.152-.531-.115-.672-.053-.661.293-1.36.094-1.374-.629-.016-.818 1.114-.871.89-1.765-.168-.669-.389-1.356-.629-2zm-3.885 2c-1.124 0-2.094.629-2.607 1.546-.373-.116-.744-.174-1.143-.174s-.77.058-1.143.174c-.513-.917-1.483-1.546-2.607-1.546-1.654 0-3 1.346-3 3s1.346 3 3 3c1.231 0 2.285-.748 2.747-1.811.245-.566.394-1.301 1.003-1.301.609 0 .758.735 1.003 1.301.462 1.063 1.516 1.811 2.747 1.811 1.654 0 3-1.346 3-3s-1.346-3-3-3zm0 4.5c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5 1.5.672 1.5 1.5-.672 1.5-1.5 1.5zm-7.5 0c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5 1.5.672 1.5 1.5-.672 1.5-1.5 1.5zm3.75-11.5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5z"/></svg>
</h1>

---

## Requirements

-   Install nvm(Node version manager) by using command
    ```sh
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
    ```
-   Installing Nodejs
    ```sh
    nvm install 16.13.1
    ```
-   NPM version 6.14.4 or higher. See [here](https://www.npmjs.com/get-npm) for install instructions.
-   Postman for API Testing. See [here](https://www.postman.com/downloads/) for downloading postman.
-   Mongo DB for the database. See [here](https://www.mongodb.com/try/download/community) for downloading.

## Installation


-   install all modules

    ```sh
    npm install --save
    ```

    ```sh
    yarn
    ```
    

## start application

-   If you want to start application

    ```sh
    npm start
    ```

    ```sh
    yarn start
    ```

### API Endpoints

-  All apis are as follow

    http://localhost:8000/api/{endpoint}

### Postman Collection

- [Link for postman collection](https://www.getpostman.com/collections/40ff29f611e5d91bfec0)

### Swagger documentation

-  All apis are documented with swagger

    http://localhost:8000/api-docs

### .ENV

- Follow this .env for development purpose
    ```sh
    #Application info
    APPLICATION_PORT = 8000
    
    #Database info
    DB_NAME=
    DB_USER=
    DB_PASSWORD=
    DB_SERVER=
    DB_PORT=

    ```

## Error Codes

- 500 - internal server error occurred, please try again
- 400 - invalid arguments, please try again
- 404 - data not found, please try again
- 401 - unauthorized request, please check again
- 403 - forbidden request, please check login credentials
- 409 - conflict happened, we do not allow duplicate entries, please try again.
- 200 - successful request
