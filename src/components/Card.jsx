import React from 'react';
import styled,{ keyframes } from 'styled-components';

const spinY = keyframes`
  from {
    transform: rotateY(0deg) rotate(36.87deg);
  }
  to {
    transform: rotateY(360deg) rotate(36.87deg);
  }
`;

const CardBack = styled.div`
  width: 300px;
  height: 400px;
  border: 8px solid #8b5a2b;
  background-color: #3b2716;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transform: rotate(36.87deg);
  margin: 20px;
  animation: ${spinY} 10s infinite cubic-bezier(0.15, 0.5, 0.5, 0.15);
`;

const Circle = styled.div`
  width: 40%;
  height: 50%;
  background-color: #000;
  border-radius: 50%;
`;

const SimpleCard = () => {
  return (
    <CardBack>
      <Circle />
    </CardBack>
  );
};

export default SimpleCard;