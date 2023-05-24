import React from 'react';
import styled from "styled-components";

const Section = styled.div`
  height: 100vh;
  background-color: #dabebe;
  scroll-snap-align: center;
`;

const Hero = () => {
   return (
      <Section>
         <h1>Hero</h1>
      </Section>
   );
};

export default Hero;
