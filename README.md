# DressStore API

## Overview

DressStore API is a Node.js and Express-based RESTful API for managing an online marketplace of products. It uses MongoDB for data storage and Mongoose for data modeling.

## Requirements

- Node.js
- MongoDB
- npm

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/J-Satvik-Advanta/COMP229-BACKEND.git
2. Navigate to the project directory:

    ```bash
    cd COMP229-BACKEND
3. Install the dependencies:

    ```bash
    npm install
## Technologies
- Node.js
- Express
- MongoDB
- Mongoose

## Usage
-   Start the server:

    ```bash
    npm run dev
- The server will start on http://localhost:3000.

## API Endpoints

### Get All Products
- URL:  http://localhost:3000/api/products
- Method: GET

### Get Product by ID
- URL:  http://localhost:3000/api/products/:id
- Method: GET

### Add New Product
- URL:  http://localhost:3000/api/products
- Method: POST

### Update Product by ID
- URL:  http://localhost:3000/api/products/:id
- Method: PUT

### Delete Product by ID
- URL:  http://localhost:3000/api/products/:id
- Method: DELETE

### Delete All Products
- URL:  http://localhost:3000/api/products
- Method: DELETE

### Find Products by Name
- URL:  http://localhost:3000/api/products/search
- Method: GET
- Query Parameter: name
