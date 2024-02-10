### Laravel REST API with ReactJS Frontend

This project provides an example of building a RESTful API using Laravel for the backend and a ReactJS frontend to consume the API. The API allows users to perform CRUD operations on a collection of tasks.

## Technologies Used
Backend:

- Laravel 10.x
- PHP 8.x
- MySQL

Frontend:
- ReactJS (created with Vite)
- Axios (for making HTTP requests)

Laravel is accessible, powerful, and provides tools required for large, robust applications.

# Installation

## Backend (Laravel)

1. Navigate to the backend directory:

```
cd online-library
```

2. Run database migrations and seed the database:

```
php artisan migrate --seed
```
3. Start the Laravel development server:

```
php artisan serve
```

## Frontend (ReactJS)

1. Navigate to the frontend directory:

```
cd qwertify-task/react
```

2. Install dependencies:

```
npm install
```

3. Start the React development server:

```
npm run dev
```

## Usage
Once both the backend and frontend servers are running, you can access the React application in your web browser at http://localhost:3000. The frontend will interact with the Laravel API endpoints to perform CRUD operations 

# API Documentation

## Authentication

Authentication is required for all endpoints. Use token-based (JWT) authentication with an API key passed in the `Authorization` header.

## Endpoints

### List Tasks

- **Method**: POST
- **URL**: `/v1/signup`
- **Description**: Create new user
- **Request Parameters**: 
```json
[
    {
    "name": "Petar Petrovic",
    "email": "petar@gmail.com",
    "password": "12345678",
    "password_confirmation": "12345678"
    }
]
```

- **Response**:

```json
[
    {
        "status": true,
        "message": "User registered successfully.",
        "token": "eyJ0eXAiOiJKV1Qi..."
    }
]
```

- **Method**: POST
- **URL**: `/v1/login`
- **Description**: Login to app
- **Request Parameters**: 

```json
[
    {
        "email": "petar@gmail.com",
        "password": "12345678"
    }
]
```
- **Response**:

```json
[
    {
        "status": true,
        "token": "eyJ0eXAiOiJKV1Qi..."
    }
]
```

- **Method**: GET
- **URL**: `/v1/profile`
- **Description**: Get data of current user
- **Request Parameters**: None
- **Response**:

```json
[
    {
        "status": true,
        "data": {
            "id": 2,
            "name": "Petar Petrovic",
            "email": "petar@gmail.com",
            "email_verified_at": null,
            "created_at": "2024-02-08T15:38:44.000000Z",
            "updated_at": "2024-02-08T15:38:44.000000Z"
        }
    }
]
```
- **Method**: POST
- **URL**: `/v1/logout`
- **Description**: Logout from aplication
- **Request Parameters**: None
- **Response**:
```json
[
    {
        "status": true,
        "message": "User logged out successfully."
    } 
]       
```

- **Method**: GET
- **URL**: `/v1/accounts`
- **Description**: Get all accounts for current user
- **Request Parameters**: None
- **Response**:
```json
  [
    {
            "id": 16,
            "account_name": "Quis Porro",
            "slug": "quis-porro",
            "website_url": "5",
            "username": "Tenetur",
            "password": "eyJpdiI6IjRLQUViL3cxcmo2Z0k5MG01TWIrdnc9PSIsInZhbHVlIjoiT1VlVHZpUTB5bS81ejZJL1A5cTRzZz09IiwibWFjIjoiNGFjNzIyMzgwM2ZmZTcyZjQ2ZGFhMzkxNGYyYmY0Yzc4Mjk2YmM4NzI0NGUzNjMxZjViNzQyYmYzMzViYzYzZSIsInRhZyI6IiJ9",
            "note": "Soluta consectetur et enim qui ratione rerum excepturi. Quidem officia minima ex illum. Minus laboriosam pariatur quis sit sed in. Veritatis dolorum quaerat quos sunt laborum soluta quasi autem. In sapiente accusantium porro aut recusandae accusamus tempora. Esse non quaerat fuga labore aliquam. Necessitatibus corporis quas eum. In ut aut ut optio exercitationem. Sit et maxime optio et libero. Nemo quisquam reprehenderit eligendi quia autem occaecati repellat. Quae doloremque aspernatur aspernatur optio. Est omnis vel quae voluptates. Ea aut illum eum molestias possimus. Sapiente libero unde aut aliquam accusamus quo quam. Est minus voluptatem eum maxime. Inventore qui totam atque non odio perferendis."
        },
        {
            "id": 20,
            "account_name": "Non Repellat",
            "slug": "non-repellat",
            "website_url": "1",
            "username": "Quos",
            "password": "eyJpdiI6Ii9JQm9oaEwrUTRkZEU2MDVmRkhydnc9PSIsInZhbHVlIjoiQm1EaVoyUTZZOTZJVC9ucTQyMFpudz09IiwibWFjIjoiMDUwZWVjYWE3MzE0YjBhY2JlYjY0M2NiNTI4MTY2NWFhN2I1NGEyMzA0ZDFiOGU3NTVhODllYjU5ODc5NGJmNyIsInRhZyI6IiJ9",
            "note": "Tempore aperiam perspiciatis ipsum ut iure aperiam enim voluptate. Nihil beatae commodi quibusdam exercitationem unde. Impedit at officiis consectetur et impedit. Aperiam fugiat consequatur quis quasi. Architecto et amet veniam ut. Dolorum est nostrum ipsam eum. Aut voluptate fugit cumque aut fugit et qui. Eveniet voluptas beatae qui a hic. Tempore repellat dignissimos quos soluta explicabo omnis. Velit esse cupiditate ducimus doloribus commodi aliquid mollitia. Libero commodi est dolorem sint qui explicabo."
        },
  ]    
```

- **Method**: POST
- **URL**: `/v1/accounts`
- **Description**: Store new account data
- **Request Parameters**: 
```json
[
    {
        "account_name": "SBB",
        "website_url": "www.sbb.com",
        "username": "test sbb",
        "password": "test123",
        "note": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, dolore hic quam reprehenderit ipsam rem tempora! Accusantium fugiat totam labore, quisquam exercitationem autem eligendi quia cupiditate quibusdam. Ipsam, dignissimos aliquid?"
    }
]
```
- **Response**:

```json
[
    {
        "status": true,
        "message": "Account successfully saved."
    }
]
```

- **Method**: POST
- **URL**: `/v1/accounts/get-by-slug/{slug}`
- **Description**: Login to app
- **Request Parameters**: 
```json
[
    {
        "slug": "ut-harum",
    }
]
```
- **Response**:
```json
[
    {
        "data": {
            "id": 21,
            "account_name": "Ut Harum",
            "slug": "ut-harum",
            "website_url": "4",
            "username": "Aliquam",
            "password": "eyJpdiI6IlF4Q3VqYjlzVXRhRFNOcmtyRHJ4dVE9PSIsInZhbHVlIjoicGQ1U2ppUlp6ZkQ0WU9PWVI4WXdHZz09IiwibWFjIjoiYTU5ZDRkZTBiZjI5YTgxMDcwN2UyZGM0M2UyZWU0Y2FjY2E1MmQzMzJjZWI1NzY2YmYyYzhiNGE0ODlhYTljZCIsInRhZyI6IiJ9",
            "note": "Impedit qui eos magnam cumque reiciendis esse rem aut. Possimus autem ducimus doloremque quas. Consequuntur quos nulla est voluptatem. Voluptatibus aliquam velit non eligendi in eos unde. Et ea autem suscipit quos assumenda. Amet autem earum debitis voluptatem qui rerum. Unde culpa voluptate dolorum voluptas fuga reiciendis dolore. Illo culpa architecto saepe architecto vel quo assumenda. Saepe voluptas quas voluptatem sequi id dolorem. Voluptatem nostrum ipsa aliquid ipsa corporis. Temporibus quos voluptate quaerat aliquam laboriosam sequi facere. Ut ullam tempore aut maiores velit. Molestiae blanditiis aliquam voluptates vero nulla aut. Dolorum delectus aut cupiditate aut eligendi. Et necessitatibus enim corrupti repellat illum eligendi rerum. Vero deserunt omnis a beatae fugit. Vel eaque perferendis dolores reprehenderit voluptas at. Aut aut perferendis atque officiis eum nostrum rerum. Voluptatibus provident ut voluptates similique. Dicta consequatur maxime repellat iste cum maxime. Qui assumenda nemo ut unde sit qui et. Est sequi omnis consectetur debitis debitis."
        }
    }
]
```