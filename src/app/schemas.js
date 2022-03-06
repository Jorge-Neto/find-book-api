const { gql } = require("apollo-server");

const typeDefs = gql`
  type Scores {
    name: ID!
    value: Float
  }

  type Book {
    isbn: ID!
    name: String
    coverImage: String
    rating: Float
    promotionalPrice: Float
    price: Float
    score: Float
    scores: [Scores!]!
    tecnologies: [String]
    requirements: [String]
    description: String
  }

  type Query {
    books: [Book]
    book(isbn: ID!): Book
  }

  input ScoresInput {
    name: String!
    value: Float
  }

  input BookInput {
    isbn: String!
    name: String
    coverImage: String
    rating: Float
    promotionalPrice: Float
    price: Float
    score: Float
    scores: [ScoresInput!]!
    tecnologies: [String]
    requirements: [String]
    description: String
  }

  type Mutation {
    createBook(data: BookInput!): Book
    deleteBook(isbn: ID!): Boolean
    updateBook(isbn: ID!, data: BookInput!): Boolean

    createScores(scores: ScoresInput): Scores
    deleteScores(name: ID!): Boolean
    updateScores(name: ID!, data: ScoresInput!): Boolean
  }
`;

export default typeDefs;
