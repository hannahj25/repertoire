import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_ITEM = gql`
  mutation addItem($userId: ID!, $title: String!, $composer: String!, $genre: String! $status: String, $deadline: String, $notes: String) {
    addItem(userId: $userId, title: $title, composer: $composer, genre: $genre, status: $status, notes: $notes) {
        _id
        title
        composer
        genre
        status
        deadline
        notes
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const REMOVE_ITEM = gql`
  mutation removeItem($itemId: ID!) {
      removeItem(itemId: $itemId) {
          _id
          title
          composer
          genre
          status
          deadline
          notes
      }
  }
`;

export const UPDATE_ITEM = gql`
mutation updateItem($itemId: ID!, $title: String, $composer: String, $genre: String, $status: String, $deadline: String, $notes: String) {
    _id
    title
    composer
    genre
    status
    deadline
    notes

}
`