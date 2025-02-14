'use client';

import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f9fafb;
`;

const WelcomeMessage = styled.h1`
  font-size: 2rem;
  color: #1e293b;
`;

export default function Home({ user }) {
  return (
    <Container>
      {user ? (
        <WelcomeMessage>Welcome back, {user.name}!</WelcomeMessage>
      ) : (
        <WelcomeMessage>Welcome to Idea Sphere. Please log in.</WelcomeMessage>
      )}
    </Container>
  );
}
