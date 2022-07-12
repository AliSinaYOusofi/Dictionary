import React, { useState, useRef, useEffect} from 'react';
import styled from 'styled-components';
import {IoSearchOutline} from 'react-icons/io5';
import { AiFillPlayCircle} from 'react-icons/ai';
import axios from 'axios';
import { useGlobalData } from '../globalState/GlobalDataProvider';

let Data;
const Search = () => {

    const searchInput = useRef();
    const shadowRef = useRef();
    const [{audioURL, phonetics, partsOfSpeech, audio, theme}, dispatch] = useGlobalData();

    const pronounceWord = () => {
        const mainAudio = audio[0] !== "" || audio[0] === undefined ? audio[0] : audio[1] !== "" ? audio[1] : audio[2];
        const audios = new Audio(mainAudio);
        audios.play();
    };
    
    let [chars, setChars] = useState("");
    let sm_word  = [];
    
    const SearchForMeaning = async () => {
        
        await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${chars}`)
        .then( (response) => {
            
            if (response.status === 200) {
                let synonym = []; let antonym = [];
                let partsOfSpeech = []; let defs = []; let examples = [];
                let phonetics = response.data[0].phonetics;
                let audio = [];
                phonetics.forEach (item => { audio.push(item.audio)});
                
                if (phonetics.length !== 0) {
                    phonetics = phonetics[0].text === undefined || phonetics[0].text === "" ? phonetics[1].text : phonetics[0].text;
                } else {
                    phonetics = "/" + chars + "/";
                }
    
                response.data[0].meanings.map(({partOfSpeech, definitions, synonyms, antonyms}) => {
                    synonyms.forEach( (item) => synonym.push(item));
                    antonyms.forEach( (item) => antonym.push(item));
                    partsOfSpeech.push(partOfSpeech);
                    
                    definitions.map( ({definition, synonyms, antonyms, example}) => {
                        example !== undefined ? examples.push(example) : console.log();
                        synonyms.forEach( (item) => {
                            synonym.includes(item) ? console.log(item) : synonym.push(item);
                        });
                        antonyms.forEach( (item) => {
                            antonym.includes(item) ? console.log() : antonym.push(item);
                        });
                        defs.push(definition);
                        return '';
                    });
                   
                    synonym = [...new Set(synonym)]; // nice on liner
                    antonym = [...new Set(antonym)]; // nice one liner
                    return '';
                });
               
                sm_word.push(String(chars));

                dispatch({type: 'set_def', defs});
                dispatch({type: 'set_syn', synonym});
                dispatch({type: 'set_ant', antonym});
                dispatch({type: 'set_url', audioURL});
                dispatch({type: 'set_pho', partsOfSpeech});
                dispatch({type: 'set_example', examples});
                dispatch({type: 'set_current_word', chars});
                dispatch({type: 'set_phonetics', phonetics})
                dispatch({type: 'set_audio_url', audio});
            }
            
        })
        .catch( (error) => { searchInput.current.value = 'not found => ' + chars; console.log(error)} );
        // how do i get the main__snynonyms from data part
        // and also parts of speech
    }
    Data = SearchForMeaning;
   

    const appendChars = (eventType) => { // for event onChange
        eventType.preventDefault();
        setChars(eventType.target.value);
    };
    
    useEffect(
        () => {
            searchInput.current.style.background = theme ? "white" : "black";
            searchInput.current.style.color = theme ? "black" : "white";

            shadowRef.current.style.background = theme ? "white" : "black";
            shadowRef.current.style.color = theme ? "black" : "white";
        }
    , [theme]);
   
    return (
        <Container style={{
           
        }}>
            <div className="speech">
                <h1> 
                    {
                        partsOfSpeech === null || partsOfSpeech === undefined
                        ? 'Word' : partsOfSpeech[0]
                    }
                </h1>
            </div>
            <div className="search__bar">
                <input type='search' placeholder='search words' id="input" onChange={appendChars} ref={searchInput}/> <IoSearchOutline onClick={SearchForMeaning}  style={{color: theme ? "black": "white"}}/>
            </div>
            <div className="play__sound">
                <div className="shadow__box" ref={shadowRef}
                >
                    <AiFillPlayCircle onClick={pronounceWord} style={{color: theme ? "black": "white"}}/>{phonetics}
                </div>
            </div>
        </Container>
    );
};
export const DataFunction = Data;
const Container = styled.div`
    @media (min-width: 600px) and (max-width: 900px) {
        height: fit-content;
        justify-content: center;
        flex-flow: column wrap;

        .play__sound {
            margin-top: 1rem;
        }
    }
    
    width: 100%;
    height: 30vh;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: center;
    align-content: center;
    .speech {
        h1 {
            font-size: 4rem;
        }
    }
    .search__bar {
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        align-items: center;
        
        input[type='search'] {
            text-align: center;
            outline: none;
            border: none;
            padding: 1rem 2rem;
            border-radius: 1rem;
            font-size: 1.4rem;
            font-family: "Fira Code";
            &::placeholder {
                font-family: "Fira Code";
                font-size: 0.9rem;
            }
            
        }

        svg {
            padding: 0rem;
            text-align: right;
            position: relative;
            right: 3rem;
            text-align: center;
            font-size: 1.9rem;
            transition: all 0.4s ease;
           
            &:hover {
                cursor: pointer;
                transform: translateY(-0.2rem);
            }
        }
    }

    .play__sound {
        .shadow__box {
            display: flex;
            flex-flow: row wrap;
            justify-content: space-around;
            align-items: center;
            padding: 0.7rem 3rem;
            border-radius: 25px;
            svg {
               
                font-size: 1.4rem;
                margin-right: 0.3rem;
                cursor: pointer;
                transition: all 1s ease;
                &:hover {
                    color: violet;
                }
            }
        }
    }

    @media (max-width: 600px) {
        width: 100%;
        display: flex;
        height: 20vh;
        flex-flow: row wrap;
        justify-content: center;
        align-items: center;
        align-content: center;
       
        .search__bar {
            margin-left: 2.4rem;
            input[type="search"] {
                margin: 0;
                width: 10rem;
                padding: 0.5rem 2rem;
                font-size: 1rem;
                &::placeholder {
                    font-size: 0.6rem;
                }
            }
            svg {
                font-size: 1.4rem;
                margin-left: 1.4rem;
            }
        }
        .speech{
        h1 {
            font-size: 1.4rem;
        }
    }
    .play__sound {
        .shadow__box {
            display: flex;
            flex-flow: row wrap;
            justify-content: center;
            align-items: center;
            margin-right: 1rem;;
            padding: 0;
            svg {
                margin: 0;

            }
        }
    }

}

    
`
export default Search;
