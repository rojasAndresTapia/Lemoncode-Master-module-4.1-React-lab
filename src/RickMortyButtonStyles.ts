import { css, SerializedStyles } from "@emotion/react"

export const ContainerButtonStyles = (): SerializedStyles => css({
    display: 'flex',
    padding:'50px',
    justifyContent: 'space-between',
})
export const RickMortyButtonStyles = (): SerializedStyles => css({
    a: {
        textDecoration: 'none',
    }
})