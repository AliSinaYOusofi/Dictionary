import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import {AiOutlineCoffee, AiOutlineClose} from 'react-icons/ai'
import { Link} from 'react-router-dom';
import {FaRegMoon} from 'react-icons/fa';
import {FiSun} from 'react-icons/fi';
import {GiHamburgerMenu} from 'react-icons/gi';
import useSound from 'use-sound';
import {GiSpeaker, GiSpeakerOff} from 'react-icons/gi';
import Speaker from "../sounds/speaker.mp3";
import NightMode from '../sounds/lclick-13694.mp3';
import { useGlobalData } from '../globalState/GlobalDataProvider';

// now should work on sound
// play sound only if soundSpeaker is on



const Navbar = ({one, two, three}) => {

    const [{theme}, dispatch] = useGlobalData();
    const [themeColor, setTheme] = useState(true);
    const [speaker, setSpeaker] = useState(true);
    const [close, setClose] = useState(false);

    const setCurrentTheme = () => { setTheme(!themeColor)};
    const setCurrentSound = () => { setSpeaker(!speaker)};
    
    const [playSound] = useSound(Speaker, {volume: 100, playbackRate: 7});
    const [playNightMode] = useSound(NightMode, {playbackRate: 1});
    const [playMenuButton] = useSound(Speaker, {volume: 100, playbackRate: 5});

    const ulRef = useRef();
    const containerRef = useRef();
    const linksRefOne = useRef();
    const linksRefTwo = useRef();
    const linksRefThree = useRef();
    const headerRef = useRef();
    const svgRef = useRef();

    window.addEventListener('resize', hapening => {
        hapening.preventDefault();
        window.innerWidth >= 600
        ? ulRef.current.style.display="flex"
        : ulRef.current.style.display="none";
    });
   
    useEffect(
        () => {
            dispatch({type: 'set_theme', themeColor});
            linksRefOne.current.style.color = theme ? "white" : "black";    
            linksRefTwo.current.style.color = theme ? "white" : "black";
            linksRefThree.current.style.color = theme ? "white" : "black";
            headerRef.current.style.color = theme ? "white" : "black";
            svgRef.current.style.color = theme ? "white" : "black";
        }
    , [themeColor, dispatch, theme]);
    return (
        <Container speaker={speaker} ref={containerRef}
        style={{
            background: theme ? "rgb(30, 38, 47)" : "rgb(225, 218, 218)"
        }}
        >

            <div className="logo__part">
                <div className="text">
                    <Link to="" ref={svgRef}>  <span className="logo__text" ref={headerRef}>Coffee.js</span> <AiOutlineCoffee className="coffee"/> </Link>
                </div>            
               <div className="icons__sounds">
                    <div className="speaker__on" onClick={setCurrentSound}>
                        {
                            speaker ? <GiSpeaker onClick={playSound}/> : <GiSpeakerOff onClick={playSound}/>
                        }

                    </div>
                    <div className="dark__light__theme"
                        onClick={setCurrentTheme}>
                            {
                                themeColor ? <FaRegMoon onClick={
                                    () => {
                                       
                                        speaker ? playNightMode() : console.log();
                                    }
                                }/> : <FiSun onClick={() => {
                                    speaker ? playNightMode() : console.log();
                                }}/>
                            }
                    </div>
                    <div className="menu__button"
                    
                    onClick={
                        () => {
                            setClose(!close);
                        }
                    }>
                        {
                            close ? <AiOutlineClose 
                            onClick={ () => {
                                speaker ? playMenuButton() : console.log();
                                ulRef.current.style.display = 'none'
                            }}/> : <GiHamburgerMenu onClick={
                                () => {
                                    speaker ? playMenuButton() : console.log();
                                    ulRef.current.style.display = 'flex'
                                }
                            }/>
                        }
                    </div>
                </div>
            </div>

            <div className="three__links"  ref={containerRef}>
                <ul ref={ulRef} id="far__links">
                    <Link to="/history" ref={linksRefOne}>  
                        <li className="one"> 
                            {
                               
                                one !== undefined ? one : "History"
                            }
                        </li>
                    </Link>
                    <Link to="/grammar" ref={linksRefTwo}>  
                        <li className="two">
                        {
                            three !== undefined ? three : "Grammar"
                        }
                        </li>
                    </Link>
                    <Link to="/originwords" ref={linksRefThree}>
                        <li className="three">
                        {
                            two !== undefined ? two : "WordsOrigin"
                        }
                        </li>
                    </Link>
                </ul>
            </div>
        </Container>
    );
}

export const Container = styled.div`

    @media (min-width: 600px) and (max-width: 900px) {
        justify-content: center;
    }
    height: 6rem;
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    position: sticky;
    .logo__part {
        margin-left: 4rem;   
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        align-items: center;
        align-items: center;
        gap: 1rem;

        span {
            font-size: 2rem;
        }
        .coffee {
            font-size: 1.8rem;
            transition: all 0.4s ease-in-out;
            &:hover {
                transform: rotate(-45deg);
            }
        }
        a {
            text-decoration: none;
        }
    }
    .icons__sounds {
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        align-items: center;
        align-content: center;
        gap: 1rem;
        margin-left: 2rem;
        text-align: center;
        
        .speaker__on {
            svg {
                font-size: 2rem;
                cursor: pointer;
            }
        }
        .dark__light__theme {
            svg {
                font-size: 1.5rem;
                cursor: pointer;
            }
        }
        .menu__button {
            svg {
               display: none;
            }
        }
    }

    .three__links {
        margin-right: 4rem;
        text-align: center;
        
        ul{
            display: flex;
            flex-flow: row wrap;
            justify-content: center;
            align-items: center;
            list-style-type: none;
            position: relative;
            text-align: center;
            transition: all 1s ease;
            li {
                display: flex;
                flex-flow: row wrap;
                justify-content: center;
                align-items: center;
                list-style-type: none;
                position: relative;
                text-align: center;
                margin-left: 1.6rem;
                font-size: 1.1rem;
                transition: all 0.4s ease;
            }

            a {
                text-decoration: none;
                position: relative;
                text-align: center;
            }

            .one::after {
                content: "";
                width: 0.4rem;
                height: 0.1rem;
                background: rgb(37, 65, 96);
                position: absolute;
                top: 1.5rem;
                transition: all 0.4s ease;

            }
            .one:hover::after {
                width: 5rem;
            }

            .right__arrow, .left__arrow { transition: all 0.3s ease; }
            .right__arrow { margin-left: 0.4rem; }
            .left__arrow { margin-right: 0.4rem; }
          
            li:hover > span{
                transform: translateY(0.9rem);
            }          

            .two::after {
                content: "";
                width: 0.4rem;
                height: 0.1rem;
                background: rgb(37, 65, 96);
                position: absolute;
                top: 1.5rem;
                transition: all 0.4s ease;
            }
            .two:hover::after {
                width: 5rem;
            }

            .three::after {
                content: "";
                width: 0.4rem;
                height: 0.1rem;
                background: rgb(37, 65, 96);
                position: absolute;
                top: 1.5rem;
                transition: all 0.4s ease;
            }
            .three:hover::after {
                width: 7.5rem;
            }
        }
    }
    @media (max-width: 600px) {
        height: fit-content;
        width: 100%;
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        align-items: center;
        align-content: center;

        .logo__part {
            margin: 0;
            width: 100%;
            display: flex;
            flex-flow: row wrap;
            justify-content: center;

            .icons__sounds {
                margin: 0;
                display: flex;
                flex-flow: row wrap;
                justify-content: center;
            }

            .menu__button {
            svg {
                font-size: 1.9rem;
                display: flex;
                align-items: center;
                align-content: center;
                cursor: pointer;
            }
        }
        }
        .three__links {
            margin: 0;
            display: flex;
            flex-flow: row wrap;
            justify-content: center;
            align-items: center;
            align-content: center;
            transition: all 1s ease;
            
            #far__links {
                transition: all 0.45s ease;
                display: flex;
                flex-flow: column wrap;
                justify-content: center;
                align-items: center;
                align-content: center;
                li {
                    margin: 0;
                    padding: 0;
                    margin-top: 1rem;
                }
            }
            span {
                display: none;
            }
        }
    }
`

export default Navbar;
