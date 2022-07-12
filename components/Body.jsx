import React, {useEffect, useRef} from 'react';
import styled from 'styled-components';
import { useGlobalData } from '../globalState/GlobalDataProvider';
import Footer from './Footer';
import Main from './Main';
import Navbar from './Navbar';
import Search from './Search';


const Body = () => {
    const [{theme}] = useGlobalData();
    const containerRef = useRef();
    useEffect(
        () => {
            containerRef.current.style.background= theme ? "rgb(14, 20, 27)" : "rgb(239, 241, 245)";
            containerRef.current.style.color= theme ? "white" : "black";
        }
    , [theme]);
    return (
        <Container theme={theme} ref={containerRef}>
           <Navbar/>
           <Search phonetics={"/space/"} word="Space"/>
           <Main />
           <Footer />
        </Container>
    );
}

const Container = styled.div`
    font-family: 'Fira Code', sans-serif;
    width: 100vw;
    transition: all 0.5s ease-in-out;
`
export default Body;
