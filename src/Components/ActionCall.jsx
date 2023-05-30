import styled from "styled-components";

const ActionCall = () => {

    return(
        <div className="background">
            <Action>
                <h1>Embark on the journey to your brand’s success</h1>
                <Button>Book a meeting</Button>
            </Action>
        </div>
    );
}

const Action = styled.div`

    
    height: 100vh;
    width: 100vw;
    padding: 12rem 0rem 0rem 8rem;

    display: flex;
    align-items: start;
    flex-direction: column;
    justify-content: center;
    gap: 3rem;

    h1 {
        z-index: -1;
        font-size: 3rem;
        background: -webkit-linear-gradient(left, #f5f9ff, #c5f8ff);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        max-width: 700px;
        opacity: 0.8;
        font-weight: 400;
        animation: appear 0.7s ease-in;
    }

    @media screen and (max-width: 930px){

        padding-top: 12rem;
        padding-left: 6rem;
        gap: 3rem;

        h1 {
            font-size: 2.5rem;
            max-width: 480px;
        }
    }

    @media screen and (max-width: 600px){
        padding-top: 10rem;
        padding-left: 5rem;
        gap: 5rem;

        h1 {
            font-size: 2.3rem;
            max-width: 350px;
            line-height: 3.5rem;
        }
    }

    @keyframes appear {
        0%{
            opacity: 0;
            transform: translateX(-20px);
        }
        100%{
            opacity: 1;
            transform: translateX(0);
        }
    }
    
`;

const Button = styled.button`

    height: 3.5rem;
    width: 13rem;
    border-radius: 0;
    background: transparent;
    border-style: solid;
    border-color: white;
    border-width: 4px;
    color: white;
    font-weight: 600;
    font-size: 1rem;
    letter-spacing: 2px;
    cursor: none;
    transition: all 0.2s ease-in-out;
    opacity: 0.8;
    animation: buttonAppear 0.7s ease-in;
    


    :hover {
        background-color: white;
        color: black;
        opacity: 1;
    }
    :active {
        background-color: #fbeedb;
        border-color: #fbeedb;
    }

    @media screen and (max-width: 1000px){

    }

    @media screen and (max-width: 600px){
        font-size: 0.8rem;
        font-weight: 500;
        height: 3rem;
        width: 11rem;
    }

    @keyframes buttonAppear {
        0%{
            opacity: 0;
            transform: translateY(20px);
        }
        100%{
            opacity: 1;
            transform: translateY(0);
        }
    }
`;

export default ActionCall;