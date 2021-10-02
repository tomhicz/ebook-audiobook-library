(This was created during my time as a student at Code Chrysalis)

# eBook and Audiobook Library

A CRUD API backend to store information on ebook, audiobooks, ecomics, etc.. from different services such as kindle, kobo, etc.. so that you can track your entire collection and find books across various services.

## Setup:

Clone the package and run `npm install` to install dependecies

You will also need a database server running.

Create a .env file in the root directory and add the information about your database and database user in the following format:

` DB_NAME=<database name>`

` DB_USER=<username>`

` DB_PASSWORD=<password>`

` DB_HOST=localhost`

` DB_PORT=5432`

## Usage:

Run development server using:  
`npm run dev`

( If you need to add more Models or Data Types then create those in the Entities folder and then create migrations using:  
`npm run makeMigrations < migrationname >` )

Run migrations  to set up your database tables using:

`npm run migrate`

Seed the database using:

`ss`

Access the Apollo GraphQL interface at the address given. (Usually [http://localhost:4000](http://localhost:4000))

## API:

### Query

`getBook(…):Book`

`books:[Book]`

`getAuthor(…):Author`

`authors:[Author]`

`getService(…):Service`

`services:[Service]`

### Mutation

`addBook(…):Boolean!`

`updateBook(…):Boolean!`

`deleteBook(…):Boolean!`

`addAuthor(…):Boolean!`

`updateAuthor(…):Boolean!`

`deleteAuthor(…):Boolean!`

`addService(…):Boolean!`

`updateService(…):Boolean!`

`deleteService(…):Boolean!`
