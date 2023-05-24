import {useState} from 'react';
import './App.css';
import Hero from "./components/Hero.jsx";
import Who from "./components/Who.jsx";
import Works from "./components/Works.jsx";
import Contact from "./components/Contact.jsx";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scroll-bar-width: none;
  &::-webkit-scrollbar {
      display: none;
  }
`


function App() {
   const [count, setCount] = useState(0);

   return (
      <Container>
         <Hero/>
         <Who/>
         <Works/>
         <Contact/>
      </Container>
   );
}

export default App;
