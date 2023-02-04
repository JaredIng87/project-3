import React from 'react';
import {
  Jumbotron,
  Container,
  CardColumns,
  Card
} from 'react-bootstrap';

import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';


import { QUERY_TEAM } from '../utils/queries';

const Team = () => {
  // Use `useParams()` to retrieve value of the route parameter `:profileId`
  const { teamId } = useParams();

  const { loading, data } = useQuery(QUERY_TEAM, {
    // Pass the `thoughtId` URL parameter into query to retrieve this thought's data
    variables: { teamId: teamId },
  });

  const team = data?.team || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Jumbotron fluid className="text-light bg-dark">
        <Container>
          <h1>Viewing {team.title}!</h1>
        </Container>
      </Jumbotron>
      <Container>
        <CardColumns>
          {team.users?.map((user) => {
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
                  <Card.Text>{user.title}</Card.Text>
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
      </Container>
    </>
  );
};

export default Team;
