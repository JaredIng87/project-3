import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
    }
  }
`;

export const QUERY_SINGLE_USER = gql`
  query getSingleUser($userId: ID!) {
    thought(userId: $userId) {
      _id
      name
      title
      description
      image
    }
  }
`;