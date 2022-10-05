import { css, SerializedStyles } from "@emotion/react"
import companyBackground from './assets/company.jpg';

export const containerHeaderStyles = (): SerializedStyles => css({
    height: '50vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundImage: `url(${companyBackground})`,
    'h1': {
        color: '#fff',
    },
    'h5': {
        color: '#fff',
    }
    
})

export const companyListStyles = (): SerializedStyles => css({
    display: 'flex',
    padding:'40px',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
})

export const companyCardStyles = (): SerializedStyles => css({
   maxWidth: '250px',
   margin: '10px 10px'
})