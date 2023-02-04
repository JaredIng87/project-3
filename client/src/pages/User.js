import React from 'react';
import { Card } from 'react-bootstrap';

// Import the `useParams()` hook
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { QUERY_SINGLE_USER } from '../utils/queries';

const SingleUser = () => {
  // Use `useParams()` to retrieve value of the route parameter `:profileId`
  const { userId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_USER, {
    // pass URL parameter
    variables: { userId: userId },
  });

  const user = data?.user || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <Card key={user.userId} border="dark">
                {user.image ? (
                  <Card.Img
                    src={user.image}
                    alt={`${user.name}`}
                    variant="top"
                  />
                ) : null}
                <Card.Body>
                  <Card.Title>{user.name}</Card.Title>
                  <p className="small">Title: {user.title}</p>
                  <Card.Text>{user.description}</Card.Text>
                </Card.Body>
              </Card>
  );
};

export default SingleUser;