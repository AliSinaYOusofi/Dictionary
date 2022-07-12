export const initialState = {
    definitions: null,
    synonyms: null,
    antonyms: null,
    phonetics: null,
    audioURL: null,
    example: null,
    partsOfSpeech: null,
    currentWord: null,
    audio: null,
    theme: false,
}

export function reducer(state, action) {
    switch(action.type) {
        case 'set_def': {
            return {
                ...state, 
                definitions: action.defs
            }
        }
        case 'set_url': {
            return {
                ...state,
                audioURL: action.audioURL
            }
        }

        case 'set_syn': {
            return {
                ...state,
                synonyms: action.synonym
            }
        }

        case 'set_ant': {
            return {
                ...state,
                antonyms: action.antonym
            }
        }

        case 'set_pho': {
            return {
                ...state,
                partsOfSpeech: action.partsOfSpeech
            }
        }

        case 'set_example': {
            return {
                ...state,
                example: action.examples
            }
        }

        case 'set_current_word': {
            return {
                ...state,
                currentWord: action.chars
            }
        }

        case 'set_phonetics': {
            return {
                ...state,
                phonetics: action.phonetics
            }
        }

        case 'set_audio_url': {
            return {
                ...state,
                audio: action.audio
            }
        }

        case 'set_theme': {
            return {
                ...state,
                theme: action.themeColor
            }
        }
        default:
            return state;
    }
}