import { darken, desaturate, lighten } from 'polished'

export const primary = {
    main: '#11999E',
    dark: darken(0.1, '#11999E'),
    light: lighten(0.1, '#11999E'),
    disabled: desaturate(0.3, '#11999E'),
}

export const secondary = {
    main: '#30E3CA',
    dark: darken(0.1, '#30E3CA'),
    light: lighten(0.2, '#30E3CA'),
    disabled: desaturate(0.3, '#30E3CA'),
}
// https://colorhunt.co/palette/e4f9f530e3ca11999e40514e
