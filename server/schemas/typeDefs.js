const { gql } = require('apollo-server-express');

const typeDefs = gql`
 type User {
     _id: ID
     username: String!
     email: String!
     password: String!
     items: [Item]
 }

 type Item {
    title: String!
    composer: String!
    genre: String!
    status: String
    deadline: String
    notes: String
 }

 type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]!
    user(userId: ID!): User

    getItems: [Item]!
    item(itemId: ID!): Item


  }


  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    removeUser(userId: ID!): User

    addItem(title: String!, composer: String!, genre: String!, status: String, deadline: String, notes: String): Item

    removeItem(itemId: ID!): Item

    updateItem(title: String, composer: String, genre: String, status: String, deadline: String, notes: String): Item
    


  }
`
module.exports = typeDefs;