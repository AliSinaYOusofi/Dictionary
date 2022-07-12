import React from 'react';
import { useNavigate} from 'react-router-dom';
import styled from 'styled-components';
import { useGlobalData } from '../globalState/GlobalDataProvider';

const Main = () => {

    
    const [{definitions, synonyms, antonyms, example, theme}] = useGlobalData();
    const navigator = useNavigate();
    return (
        <Container style={{
            background: theme ? "rgb(14, 20, 27)" : "rgb(248, 241, 241)"
        }} theme={theme}>
            <div className="definitions">
                <div>
                    <h1> Definitions</h1>
                </div>
                <div className="defs">
                    <ul>
                            {
                                definitions !== null ?  
                                    definitions.map( (item, index) => {
                                        return (
                                            <li key={index}> {index + '. ' + item} </li>
                                        )
                                }) : ''
                            }
                        </ul>
                </div>
            </div>
            <div className="examples">
                <div className="example__header">
                    <h1> examples </h1> 
                </div>
                <div className="examples_array">
                    <ul>
                        {
                            example !== null ?
                            example.map( (item, index) => {
                                return (
                                    <li key={index}>
                                        {
                                            item === undefined ?
                                            '' : index + '. ' + item
                                        }
                                    </li>
                                )
                            })
                            : ''
                        }
                    </ul>
                </div>
                
            </div>
            <div className="synonyms">
                <div className="syn__header">
                    <h1> Synonyms </h1>
                </div>

                <div className="syns">
                    <ul>
                        {
                            synonyms !== null ?
                            synonyms.map( (item, index) => {
                                return (
                                   
                                        <li key={index * 2 + index} 
                                        style={{
                                            background: theme ? "rgb(36, 45, 55)" : "rgb(225, 218, 218)",
                                            color: !theme ? "rgb(36, 45, 55)" : "rgb(225, 218, 218)"
                                        }}
                                        onClick={
                                            (event) => {
                                                navigator("/meaning", {state: {"word": event.target.innerText}});
                                            }
                                        }>
                                            {item}
                                    </li>
                                   
                                )
                            }) : ''
                        }
                    </ul>
                </div>
                
            </div>

            <div className="antonyms">
                <div className="header">
                    <h1> Antonyms </h1>
                </div>
                <div className="ants">
                    <ul>
                        
                        {
                            antonyms !== null ?
                            antonyms.map( (item, index) => {
                                return (
                                        <li key={index}
                                        style={{
                                            background: theme ? "rgb(36, 45, 55)" : "rgb(225, 218, 218)",
                                            color: !theme ? "rgb(36, 45, 55)" : "rgb(225, 218, 218)"
                                        }}
                                        onClick={
                                            (event) => {
                                                navigator("/meaning", {state: {"word": event.target.innerText}});
                                            }
                                        }>
                                            {item}
                                    </li>
                                )
                            }) : ''
                        }
                    </ul>
                </div>
            </div>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-content: center;
    ul {
        display: flex;
        flex-flow: column wrap;
        justify-content: center;
        align-items: flex-start;
        height: fit-content;
        list-style-type: none;
        li {
            margin-top: 1rem;
            line-height: 1.5rem;
        }
    }

    .definitions {
        width: 100%;
        display: flex;
        flex-flow: column wrap;
        justify-content: center;
        align-content: center;
        margin-bottom: -4rem;
        h1 {
            margin-left: 2rem;
        }

        .defs {
            position: relative;
            top: -2.8rem;
            width: 80%;
        }
    }

    .antonyms, .synonyms {
        width: 100%;
        h1 {
            margin-left: 2rem;
        }
        ul {
            display: flex;
            flex-flow: row wrap;
            justify-content: flex-start;
            align-items: center;
            height: fit-content;
            li {
                text-align: center;
                padding: 0.3rem 1rem;
                border-radius: 0.2rem;
                margin-right: 0.4rem;
                cursor: pointer;
            }
        }
    }

    h1 {
        font-size: 3rem;
    }

    .antonyms {
        display: flex;
        flex-flow: column wrap;
        justify-content: center;
        align-content: center;
        
        .ants {
            position: relative;
            top: -2.8rem;
            width: 80%;
        }
    }

    .synonyms {
        display: flex;
        flex-flow: column wrap;
        justify-content: center;
        align-content: center;
       
        margin-bottom: -3rem;
        .syns {
            position: relative;
            top: -2.8rem;
            width: 80%;
        }
    }

    .examples {
        width: 100%;
        display: flex;
        flex-flow: column wrap;
        justify-content: center;
        align-content: center;
        margin-bottom: -3rem;
        h1 {
            margin-left: 2rem;
        }

        .examples_array {
            position: relative;
            top: -2.8rem;
            width: 80%;
        }
    }
`
export default Main;
