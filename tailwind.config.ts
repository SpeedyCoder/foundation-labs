import {type Config} from "tailwindcss";
import {fontFamily} from "tailwindcss/defaultTheme";

export default {
    content: ["./src/**/*.tsx"],
    theme: {
        colors: {
            moonstone: {
                DEFAULT: '#58a4b0',
                100: '#112224',
                200: '#224348',
                300: '#33656c',
                400: '#448690',
                500: '#58a4b0',
                600: '#7ab7c0',
                700: '#9bc9d0',
                800: '#bcdbe0',
                900: '#deedef'
            },
            blue: {
                DEFAULT: '#1c448e',
                100: '#060d1c',
                200: '#0b1b38',
                300: '#112854',
                400: '#163670',
                500: '#1c448e',
                600: '#275fc6',
                700: '#5484dd',
                800: '#8dade8',
                900: '#c6d6f4'
            },
            orange: {
                DEFAULT: '#f58f29',
                100: '#371d03',
                200: '#6d3905',
                300: '#a45608',
                400: '#da720a',
                500: '#f58f29',
                600: '#f7a554',
                700: '#f9bc7e',
                800: '#fbd2a9',
                900: '#fde9d4'
            },
            yellow: {
                DEFAULT: '#fdf23f',
                100: '#3f3c01',
                200: '#7d7701',
                300: '#bcb302',
                400: '#faee03',
                500: '#fdf23f',
                600: '#fdf666',
                700: '#fef88c',
                800: '#fefab2',
                900: '#fffdd9'
            },
            'white': {
                DEFAULT: '#fefefd',
                100: '#434322',
                200: '#868644',
                300: '#baba75',
                400: '#dbdbb8',
                500: '#fefefd',
                600: '#fefefc',
                700: '#fefefd',
                800: '#fefefe',
                900: '#fffffe'
            }
        },
        extend: {
            fontFamily: {
                sans: ["var(--font-geist-sans)", ...fontFamily.sans],
            },
        },
    },
    plugins: [],
} satisfies Config;
