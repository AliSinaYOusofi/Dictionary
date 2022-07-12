import React from 'react';
import styled from 'styled-components';
import { useGlobalData } from '../globalState/GlobalDataProvider';
import { useNavigate, useLocation} from 'react-router';
const Dictionary = ({where, buttonText}) => {

    const [{theme}] = useGlobalData();
    const navigate = useNavigate();
    const location = useLocation();
    
    return (
        <Container
        style={{
            background: theme ? "rgb(14, 20, 27)" : "rgb(239, 241, 245)",
            color: !theme ? "rgb(14, 20, 27)" : "rgb(239, 241, 245)"
        }}>
            <div className="header">
                <h1> {
                    location.state !== null ? location.state.part : where
                    }</h1>
            </div>
            <button
            style={{
                background: !theme ? "rgb(30, 38, 47)" : "rgb(255, 255, 255)",
                color: theme ? "black" : "rgb(239, 241, 245)"
            }}
            onClick={
                () => {
                    navigate("/");
                }
            }>
                {buttonText}
            </button>
        </Container>
    );
}

const Container = styled.div`
    box-sizing: border-box;
    width: 100vw;
    height: 100vh;
    margin:0;
    padding: 0;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    align-content: center;

    h1 {
        font-size: 7rem;
        letter-spacing: 1px;
    }

    button {
        font-family: monospace;
        font-size: 4rem;
        outline: none;
        border: none;
        padding: 0.5rem 10rem;
        border-radius: 0.5rem;
        cursor: pointer;
        letter-spacing: 0.4rem;
        transition: all 0.4s ease;
        &:hover {
            border-radius: 1.5rem;
        }
    }

    @media screen and (max-width: 600px){
        button {
            padding: 0.4rem 8rem;
            font-size: 3rem;
        }
        h1 {
            font-size: 4rem;
        }
    }
`
export default Dictionary;
