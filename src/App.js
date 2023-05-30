import BurgerMenu from "./Components/BurgerMenu"
import ActionCall from "./Components/ActionCall"
import ControlBar from "./Components/ControlBar"
import Socials from "./Components/Socials"
import Services from "./Components/Services"
import Contact from "./Components/Contact"

import styled from "styled-components";
import './App.css';


import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {

  const [mousePos, setMousePos] = useState({});
  const [activeBurger, setActiveBurger] = useState(false);
  const [onWhite, setOnWhite] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener(
        'mousemove',
        handleMouseMove
      );
    };
  }, []);

  return (
    <Router>
      <div className="App">

          <BurgerMenu active={activeBurger} setActive={setActiveBurger}/>          
          <Socials/>
          <ControlBar/>
          <Cursor onWhite={onWhite} style={{left: mousePos.x-10 + "px" ,top: mousePos.y-10 + "px"}}/>
        

        <Switch>

          <Route exact path="/">
            <ActionCall/>
          </Route>

          <Route exact path="/Services">
            <Services onWhite={onWhite} setOnWhite={setOnWhite} />
          </Route>

          <Route exact path="/Contact">
            <Contact/>
          </Route>

        </Switch>
      </div>
    </Router>
  );
}


const Cursor = styled.div`
  
  border-radius: 50%;
  background-color: #00000030;
  pointer-events: none;
  width: 20px;
  height: 20px;
  border: solid 2px rgba(253, 255, 255, 0.3);
  position: absolute;
  transition: all 0.01s ease;
`;



export default App;
