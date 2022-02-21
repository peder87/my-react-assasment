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
