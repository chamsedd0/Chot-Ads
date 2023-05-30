import styled from "styled-components";

import {Link} from "react-router-dom";

const ControlBar = () => {


    return(
        <Bar>
            <Link to="/"><div></div></Link>
            <Link to="/Services"><div></div></Link>
            <Link to="/AboutUs"><div></div></Link>
        </Bar>
      );


}

export default ControlBar;


const Bar = styled.div`

  a {

    cursor: none;

  }


  position: fixed;
  width: 60px;
  height: 200px;
  top: 40%;
  right: 4.5%;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 35px;
  
  div {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: #ffffff40;
    
    border: solid 2px #ffffff60;
    transition: all 0.2s ease-out;

    :hover {
      background-color: white;
      animation: upDown 0.6s alternate infinite;
    }
    :active {
      background-color: #ffe2b7;
    }
  }

  @media screen and (max-width: 800px){
    display: none;
  }


  @keyframes upDown {
    0%{
      transform: scale(0.9);
    }
    100%{
      transform: scale(1.2);
    }
  }

`;