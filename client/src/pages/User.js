import React from 'react';

// Import the `useParams()` hook
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { QUERY_SINGLE_USER } from '../utils/queries';

const User = () => {
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
      <div className="my-3">
        <h3 className="card-header bg-dark text-light p-2 m-0">
          {user.name} <br />
          <span style={{ fontSize: '1rem' }}>
            {user.title}
          </span>
        </h3>
        <div className="bg-light py-4">
          <blockquote
            className="p-4"
            style={{
              fontSize: '1.5rem',
              fontStyle: 'italic',
              border: '2px dotted #1a1a1a',
              lineHeight: '1.5',
            }}
          >
            {user.description}
          </blockquote>
        </div>
        </div>
  );
};

export default User;