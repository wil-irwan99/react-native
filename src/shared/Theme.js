const pallete = {
    white: '#fff',
    orange: 'rgb(252,80,40)',
    grey: 'rgb(92,93,95)',
    lightGrey: 'rgb(234,236,241)',
}

export const theme = {
    background: require('../../assets/img/background.jpg'),
    colors: {
        foreground: pallete.grey,
        primary: pallete.orange,
        secondary: pallete.lightGrey,
        white: pallete.white
    },
    spacing: {
        xs: 4,
        s: 8,
        m: 16,
        l: 24,
        xl: 31,
        xxl: 40
    },
    radius: {
        s: 5,
        m: 10,
        l: 25,
        xl : 32
    },
    text: {
        title: {
            fontSize: 32,
            color: pallete.grey,
            fontFamily : 'Poppins-Bold'
        },
        subtitle: {
            fontSize: 16,
            color: pallete.grey,
            fontFamily : 'Poppins-Regular'
        },
        subtitle2: {
            fontSize: 24,
            color: pallete.grey,
            fontFamily : 'Poppins-Regular'
        }
    }
}