import styled from "styled-components";
import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'



const Socials = () => {

    return(
        <Footer>
            <a href="https://www.instagram.com/chot.ads/" ><FontAwesomeIcon icon={faInstagram} /></a>
        </Footer>
    );

}

const Footer = styled.div`

    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: end;
    width: 100%;
    height: 5rem;

    a{
        cursor: none;
        text-decoration: none;
        color: white;
        font-size: 40px;
        margin-right: 5rem;
        margin-bottom: 4rem;
        transition: all 0.25s ease-out;
        opacity: 0.5;

        :hover {
            opacity: 1;
            transform: scale(1.15);
            color: #fc85f0;
        }
        :active {
            opacity: 1;
            color: #fac575;
        }
    }

   

`;

export default Socials;