import React from 'react';
import styled from 'styled-components';
import {AiFillTwitterCircle} from 'react-icons/ai';
import {FaReact, FaEthereum } from 'react-icons/fa';
import {BsWordpress} from 'react-icons/bs';
import {SiMongodb, SiBlockchaindotcom, SiFacebook, SiEmbarcadero} from 'react-icons/si';
import { useGlobalData } from '../globalState/GlobalDataProvider';
import { useNavigate } from 'react-router';


const Footer = () => {

    const [{theme}] = useGlobalData();
    const navigate = useNavigate();

    return (
        <Container className="container" theme={theme}
        style={{
            background: theme ? "rgb(36, 45, 55)" : "rgb(225, 218, 218)"
        }}
        >
            <div className="large__section">
                <div className="text__part">
                    <h2> Coffee.js </h2>
                    <h3>The Heart of Innovation </h3>
                </div>
                
                <div className="social__icons">
                    <FaEthereum />
                    <AiFillTwitterCircle />
                    <FaReact />
                    <BsWordpress />
                    <SiBlockchaindotcom />
                    <SiMongodb />
                    <SiFacebook />
                    <SiEmbarcadero />
                </div>
            </div>
            <div className="fucking__1">
                
                    <span> Events <span className="arrow"> -&gt;</span></span>               
                <ul>
                    
                        <li onClick={
                        () => {
                            navigate("/history", {state: {'part': 'Media Events'}});
                        }
                        }> Media Events</li>
                        <li onClick={
                        () => {
                            navigate("/history", {state: {'part': 'Coder Events'}});
                        }
                        }> Coder Events </li>
                        <li onClick={
                        () => {
                            navigate("/history", {state: {'part': 'Blockchain'}});
                        }
                        }> Blockchain Events </li>
                        <li onClick={
                        () => {
                            navigate("/history", {state: {'part': 'Coders Space'}});
                        }
                        }> Coders Space </li>
                </ul>
            </div>
            <div className="fucking__2">
                <span> BootCamps <span className="arrow"> -&gt;</span></span>
                <ul>
                        <li onClick={
                        () => {
                            navigate("/history", {state: {'part': 'Javascript'}});
                        }
                        }> Javascript  </li>
                        <li onClick={
                        () => {
                            navigate("/history", {state: {'part': 'Python'}});
                        }
                        }> Python </li>
                        <li onClick={
                        () => {
                            navigate("/history", {state: {'part': 'Vyper'}});
                        }
                        }> Vyper  </li>                   
                        <li onClick={
                        () => {
                            navigate("/history", {state: {'part': 'Solidity'}});
                        }
                        }> Solidity  </li>
                   
                </ul>
            </div>
            
            <div className="fucking__3">
                <span> Coder Sites  <span className="arrow"> -&gt;</span></span>
                <ul>
                    <li  onClick={
                        () => {
                            navigate("/history", {state: {'part': 'Switzerland'}});
                        }
                        }> Switzerland</li>
                        <li onClick={
                        () => {
                            navigate("/history", {state: {'part': "Toronto"}});
                        }
                        }> Canada Toronto </li>
                        <li onClick={
                        () => {
                            navigate("/history", {state: {'part': 'Afghanistan'}});
                        }
                        }> Afghanistan</li>                   
                        <li onClick={
                        () => {
                            navigate("/history", {state: {'part': 'Paris'}});
                        }
                        }> France Paris </li>
                </ul>
            </div>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    align-items: center;
    align-content: center;
    .large__section {
        flex-flow: column wrap;
        justify-content: space-around;
        
        .social__icons {
            svg {
               margin-right: 0.5rem;
               font-size: 1.7rem;
               transition: all 0.4s ease;
               &:hover {
                   transform: scale(1.2);
                   cursor: pointer;
               }
            }
        }
    }

    .fucking__1, .fucking__2, .fucking__3 {
       
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        align-items: center;
        align-content: center;
        position: relative;
        width: fit-content;
        height: fit-content;
        ul {
            list-style: none;
            

            a {
                text-decoration: none;            
            }

            li {
                margin-top: 0.2rem;
                cursor: pointer;
                transition: all 0.4s ease;
                &:hover {
                    color: violet;
                }
            }

            
        }

    }

    @media (max-width: 600px) {
        flex-flow: column wrap;
        gap: 1rem;
        .fucking__1, .fucking__2, .fucking__3 {
            flex-flow: column wrap;
            span {
                font-size: 2rem;
            }

            .arrow {
                display: none;
            }
        }
    }
    
`
export default Footer;
