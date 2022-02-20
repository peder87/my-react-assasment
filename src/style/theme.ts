import { DefaultTheme } from 'styled-components'
import { primary, secondary } from './colors'
export const theme: DefaultTheme = {
    palette: {
        common: {
            black: '#40514E',
            white: '#E4F9F5',
            disabled: '#ccc',
        },
        primary: {
            main: primary.main,
            dark: primary.dark,
            light: primary.light,
            disabled: primary.disabled,
        },
        secondary: {
            main: secondary.main,
            dark: secondary.dark,
            light: secondary.light,
            disabled: secondary.disabled,
        },
    },
}
