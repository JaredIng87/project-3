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
query User($userId: ID!) {
  user(userId: $userId) {
    _id
    title
    name
    image
    description
  }
}
`;

export const QUERY_TEAM = gql`
query Team($teamId: ID!) {
  team(teamId: $teamId) {
    _id
    name
    description
    users {
      _id
      image
      name
      title
    }
  }
}
`;