## Laravel REST API with ReactJS Frontend

This project provides an example of building a RESTful API using Laravel for the backend and a ReactJS frontend to consume the API. The API allows users to perform CRUD operations on a collection of tasks.

##Technologies Used
Backend:

- Laravel 10.x
- PHP 8.x
- MySQL

Frontend:
- ReactJS
- Axios (for making HTTP requests)

Laravel is accessible, powerful, and provides tools required for large, robust applications.

## Installation

API Endpoints
The following endpoints are available for interacting with tasks:

- POST        /v1/signup: Sign up req           
- POST        /v1/login: Login request             
- POST        /v1/forgot-password: Reset password request
- GET         /v1/profile: Getting data for current user
- POST        /v1/logout: Logout method
- apiResource /v1/accounts: CRUD methods
- GET         /v1/accounts/get-by-slug/{account:slug} Get a specific account by slug


