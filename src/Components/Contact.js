import styled from "styled-components";


const Contact = () => {
    return(
        <Container className="container">
            <Form>
                <div className="inputs">
                    <h2>Contact</h2>
                    <div className="first">
                        <input id="small" type="text" placeholder="Name"/>
                        <input id="normal" type="email" placeholder="Email"/>
                    </div>

                    <div className="second">
                        <select className="small" name="" placeholder="">
                            <option value="">Topic of your question</option>
                            <option value=""></option>
                            <option value=""></option>
                        </select>
                        <input type="text" id="normal" placeholder="What's your question ?"/>
                    </div>
                    <div className="text">
                        <input type="text" id="huge" placeholder="write your message here..."/>
                    </div>
                    <button>Submit</button>
                </div>
            </Form>
        </Container>
    );
}

export default Contact;

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    animation: fadeIn 0.5s ease;
`;

const Form = styled.form`

    display: flex;
    align-items: center;
    justify-content: center;

    height: 100%;
    gap: 4rem;

    #huge {
        min-width: 35rem;
        height: 5rem;
        resize: both;
    }
    #small {
        width: 10rem;
    }
    .small {
        width: 10rem;
    }

    #normal {
        min-width: 24rem;
    }

    h2{
        margin: 1.5rem 0rem;
        color: white;
        opacity: 0.8;

    }

    select {
        padding: 0rem 1rem;
        color: #00000085;
        outline: none;
        border: none;
        border-radius: 3px;
        
        height: 2.5rem;
    }

    .first {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
    }
    .second {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
    }

    .inputs {
        margin-top: 3rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        
    }

    input {
        cursor: none;
        padding: 0rem 1rem;
        font-size: 0.9rem;
        
        height: 2.7rem;
        border: none;
        border-radius: 3px;
        outline: none;
    }
    button {
        border: none;
        min-width: 24rem;
        height: 3rem;
        border-radius: 3px;
        letter-spacing: 5px;
        font-size: 0.8rem;
        font-weight: 600;
        transition: background 0.3s ease;
        background-color: #202d58;
        color: white;
    }

    button:hover {
        background-color: #273b66;
    }
    button:active {
        
        background-color: #192448;
    }


    @media screen and (max-width: 900px){
        .first {
            flex-direction: column;
        }
        #small {
            width: 24rem;
        }
        select {
            display: none;
        }
        #huge {
            min-width: 24rem;
        }
        h2 {
            z-index: -1;
        }
        
    }
`;