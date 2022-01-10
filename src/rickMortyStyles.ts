import { css, SerializedStyles } from "@emotion/react"

export const rickMortyStyles = (): SerializedStyles => css({
    display: 'flex',
    padding:'50px',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
})