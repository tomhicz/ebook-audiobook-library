// Construct a schema, using GraphQL schema language
import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Query {
    getBook(id: Int!): Book
    books: [Book]
  }
  type Mutation {
    addBook(title: String!, author: String!): Boolean!
    updateBook(id: Int!, title: String, author: String): Boolean!
  }
  type Book {
    id: Int!
    title: String!
    author: String!
  }
`;
