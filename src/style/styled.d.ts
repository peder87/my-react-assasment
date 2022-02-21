import 'styled-components'
import { ThemeType } from './theme'

interface Palette {
    main: string
    light?: string
    dark?: string
    disabled?: string
}

declare module 'styled-components' {
    export interface DefaultTheme extends ThemeType {
        palette: {
            common: {
                black: string
                white: string
                disabled: string
            }
            primary: Palette
            secondary?: Palette
        }
    }
}

// declare module 'styled-components' {
//     export interface DefaultTheme {
//         colors: {
//             dark: '#40514E'
//             primary: '#11999E'
//             background: '#E4F9F5'
//             accent: '#30E3CA'
//         }
//     }
// }
