
import styled from "styled-components";

import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'


const BurgerMenu = ({active, setActive}) => {


    return(
        <NavBar>
            <Menu onClick={()=> {active ? setActive(false) : setActive(true)}}>
                
                <div className={active ? "unFirst active" : "first unactive"}></div>
                <div className={active ? "unSecond active" : "second unactive"}></div>
                <div className={active ? "unThird active" : "third unactive"}></div>
                <Shadow active={active}></Shadow>
                
            </Menu>
            <Links active={active}>
                    <Link onClick={()=> {active ? setActive(false) : setActive(true)}} className="home" to="/"><FontAwesomeIcon icon={faHome} /></Link>
                    <Link onClick={()=> {active ? setActive(false) : setActive(true)}} className="link" to="/Services">Services</Link>
                    <Link onClick={()=> {active ? setActive(false) : setActive(true)}} className="link" to="/AboutUs">About us</Link>
                    <Link onClick={()=> {active ? setActive(false) : setActive(true)}} className="link" to="/Contacts">Contacts</Link>
            </Links>
        </NavBar>

    );
}


const NavBar = styled.div`

    position: fixed;
    display: flex;
    align-items: center;
    justify-content: start;
    width: 100%;
    height: 18rem;


`;

const Menu = styled.div`

    height: 4rem;
    width: 4rem;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    gap: 10px;
    margin-left: 8rem;
    box-shadow: none;


    .active {
        background-color: white;
        border: solid 1px #ffffff;
        height: 5px;
        border-radius: 10px;
        transition: all 0.3s ease-out;

    }

    .unactive {
        background-color: #ffffff60;
        border: solid 1px #ffffff;
        height: 5px;
        border-radius: 10px;
        transition: all 0.3s ease;
        
    }

    .unSecond {
        transform: translateX(-30px);
        width: 2.5rem;
        opacity: 0;
    }

    .unFirst{
        transform: rotate(45deg) translateY(1.3rem);
        width: 2.5rem;
    }
    .unThird {
        transform: rotate(-45deg) translateY(-1.3rem);
        width: 2.5rem;
    }

    .first {
        width: 3.5rem;
    }
    .second {
        width: 2.5rem;
    }
    .third {
        width: 1.5rem;
    }

    :hover {
        .unactive {
            background-color: white;
            width: 3.5rem;
        }
    }

    @media screen and (max-width: 1000px){
        
        gap: 10px;
        margin-left: 6rem;

        .first{
            width: 3.2rem;
        }
        .second{
            width: 2.2rem;
        }
        .third{
            width: 1.2rem;
        }
        :hover {
        .unactive {
            background-color: white;
            width: 3.2rem;
        }
    }
    }
    @media screen and (max-width: 600px){
        gap: 10px;
        margin-left: 5rem;

        .line {
            height: 5px;
        }

        .first{
            width: 3rem;
        }
        .second{
            width: 2rem;
        }
        .third{
            width: 1rem;
        }
        :hover {
        .unactive {
            background-color: white;
            width: 3rem;
        }
    }
        
    }

`;

const Shadow = styled.div`

    z-index: -1;
    
    position: absolute;
    top: -510px;
    left: -600px;
    background-color: #0000008c;
    width: 1150px;
    height: 1000px;
    border-radius: 50%;
    filter: blur(1.5rem);
    
    box-shadow: none;
    transition: all 1.2s ease-out;
    -moz-transition: all 1.2s ease-out; 
    -webkit-transition: all 1.2s ease-out;
    -o-transition: all 1.2s ease-out;

    clip-path: circle(${props => props.active ? "95%" : "0%"});

    @media screen and (max-width: 600px){
        width: 1050px;
        background-color: #000000db;
    }

`;

const Links = styled.div`

    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    bottom: 0;
    left: 18%;
    gap: 1.8rem;

    .home{
        margin-left: 5rem;
        transition-delay: 0s;
    }
    .link:nth-child(2){
        margin-left: 0rem;
        transition-delay: 0.1s;
    }
    .link:nth-child(3){
        margin-left: -4rem;
        transition-delay: 0.2s;
    }
    .link:nth-child(4){
        margin-left: -9rem;
        transition-delay: 0.3s;
    }
    
    .link {
        opacity: ${props => props.active ? 1 : 0};
        transform: translateX(${props => props.active ? "0px" : "-20px"});
        cursor: none;
        color: white;
        text-decoration: none;
        font-size: 20px;
        letter-spacing: 3px;
        display: inline-block;
        position: relative;
        transition: all 0.3s ease;
        pointer-events: ${props => props.active ? "all" : "none"};
  
    }
    .home {
        pointer-events: ${props => props.active ? "all" : "none"};
        opacity: ${props => props.active ? 1 : 0};
        transform: translateX(${props => props.active ? "0px" : "-20px"});
        cursor: none;
        color: white;
        text-decoration: none;
        font-size: 20px;
        letter-spacing: 3px;
        display: inline-block;
        position: relative;
        transition: all 0.3s ease;
  
    }
    .home:hover {
        transform: scale(1.3);
        color: #fc85f0;
    }

    .link::after {
        content: '';
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: white;
        transform-origin: bottom left;
        transition: transform 0.25s ease-out;
    }
    .link:hover::after {
        transform: scaleX(1);
        transform-origin: bottom left;
    }

    @media screen and (max-width: 1200px){
        left: 20%;
    }


    @media screen and (max-width: 930px){

        left: 28%;

    }

    @media screen and (max-width: 600px){

        left: 40%;
        
    }

`;


export default BurgerMenu;