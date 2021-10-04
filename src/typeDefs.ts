// Construct a schema, using GraphQL schema language
import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Query {
    getBook(id: Int!): Book
    books: [Book]
    booksByRead(read: Boolean!): [Book]
    getAuthor(id: Int!): Author
    authors: [Author]
    getService(id: Int!): Service
    services: [Service]
  }
  type Mutation {
    addBook(
      title: String!
      authors: [InputAuthor]!
      imageurl: String
      isbn: String
      services: [InputService]!
      booktype: InputBookType!
      read: Boolean
    ): Boolean!
    updateBook(
      id: Int!
      title: String
      authors: [InputAuthor]
      imageurl: String
      isbn: String
      services: [InputService]
      booktype: InputBookType
      read: Boolean
    ): Boolean!
    deleteBook(id: Int!): Boolean!

    addAuthor(first_name: String!, last_name: String): Boolean!
    updateAuthor(id: Int!, first_name: String, last_name: String): Boolean!
    deleteAuthor(id: Int!): Boolean!

    addService(name: String!, mainurl: String, baseurl: String): Boolean!
    updateService(
      id: Int!
      name: String
      mainurl: String
      baseurl: String
    ): Boolean!
    deleteService(id: Int!): Boolean!
  }

  type Book {
    id: Int!
    title: String!
    authors: [Author]!
    imageurl: String
    isbn: String
    services: [Service]!
    booktype: BookType!
    read: Boolean!
  }
  type Author {
    id: Int!
    first_name: String!
    last_name: String
  }
  type Service {
    id: Int!
    name: String!
    mainurl: String
    baseurl: String
  }
  type BookType {
    name: String!
  }

  input InputAuthor {
    id: Int!
    first_name: String!
    last_name: String
  }
  input InputService {
    id: Int!
    name: String!
    mainurl: String
    baseurl: String
  }
  input InputBookType {
    name: String!
  }
`;
