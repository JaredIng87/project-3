// import React from 'react';
// import {
//   Jumbotron,
//   Container,
//   CardColumns,
//   Card
// } from 'react-bootstrap';




// const Team = () => {

//   return (
//     <>
//       <Jumbotron fluid className="text-light bg-dark">
//         <Container>
//           <h1>Viewing {teamData.title}!</h1>
//         </Container>
//       </Jumbotron>
//       <Container>
//         <CardColumns>
//           {teamData.users?.map((user) => {
//             return (
//               <Card key={user.userId} border="dark">
//                 {user.image ? (
//                   <Card.Img
//                     src={user.image}
//                     alt={`${user.name}`}
//                     variant="top"
//                   />
//                 ) : null}
//                 <Card.Body>
//                   <Card.Title>{user.name}</Card.Title>
//                   <Card.Text>{user.title}</Card.Text>
//                 </Card.Body>
//               </Card>
//             );
//           })}
//         </CardColumns>
//       </Container>
//     </>
//   );
// };

// export default Team;
