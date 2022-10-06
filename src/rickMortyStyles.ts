import { css, SerializedStyles } from "@emotion/react"
import rickBackground from './assets/rick.png';

export const containerHeaderStyles = (): SerializedStyles => css({
    height: '50vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundImage: `url(${rickBackground})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    'h1': {
        color: '#fff',
    },
    'h5': {
        color: '#fff',
    }
    
})

export const rickMortyStyles = (): SerializedStyles => css({
    display: 'flex',
    padding:'50px',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
})