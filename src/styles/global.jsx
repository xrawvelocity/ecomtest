const globalStyles = (coloring) => {
  return {
    MuiCssBaseline: {
      '@global': {
        '*': {
          padding: '0',
          margin: '0',
          boxSizing: 'border-box',
          webkitTapHighlightColor: 'transparent',
        },
        '*:focus, *:active': {
          outline: 'none !important',
        },
        html: {
          fontSize: '62.5%',
          scrollBehavior: 'smooth',
          overflowX: 'hidden',
          overflowY: 'overlay',
          marginLeft: 'calc(100vw - 100%)',
        },
        '@media only screen and (max-width: 100em)': {
          html: {
            fontSize: '60%',
          },
        },
        '@media only screen and (max-width: 90em)': {
          html: {
            fontSize: '56.25%',
            overflowY: 'scroll !important',
          },
        },
        '@media only screen and (max-width: 65em)': {
          html: {
            fontSize: '50%',
          },
        },
        '@media only screen and (max-width: 560px)': {
          html: {
            fontSize: '40%',
          },
        },
        body: {
          fontFamily: '"Open Sans", sans-serif',
          webkitFontSmoothing: 'antialiased',
          height: '100vh',
          position: 'absolute',
          width: '100vw',
          paddingRight: '0 !important',
          marginTop: '64px',
        },
        'a, a:link, a:visited': {
          color: coloring.text,
          textDecoration: 'none',
        },
        'a:hover': {
          color: coloring.primaryMain,
        },
        'a:focus, a:active': {
          outline: 'none',
        },
        '::-moz-selection': {
          backgroundColor: coloring.primaryMain,
          color: 'transparent',
        },
        '::selection': {
          backgroundColor: coloring.primaryMain,
          color: coloring.paper,
        },
        '*::-webkit-scrollbar-track': {
          borderRadius: '4px',
          backgroundColor: 'transparent',
          position: 'fixed',
        },
        '*::-webkit-scrollbar': {
          width: '5px',
          backgroundColor: 'transparent',
          position: 'fixed',
        },
        'body::-webkit-scrollbar': {
          width: '7px',
          backgroundColor: 'transparent',
          position: 'fixed',
        },
        '*::-webkit-scrollbar-thumb': {
          borderRadius: '10px',
          backgroundColor: coloring.darker,
        },
        'input:-webkit-autofill, input:-webkit-autofill:hover, input:-webkit-autofill:focus, textarea:-webkit-autofill, textarea:-webkit-autofill:hover, textarea:-webkit-autofill:focus, select:-webkit-autofill, select:-webkit-autofill:hover, select:-webkit-autofill:focus':
          {
            border: '1px solid green',
            webkitTextFillColor: 'green',
            webkitBoxShadow: '0 0 0px 1000px #000 inset !important',
            transition: 'background-color 5000s ease-in-out 0s',
          },
        'input[type=number]': {
          '-moz-appearance': 'textfield',
        },
        'input::-webkit-outer-spin-button': {
          '-webkit-appearance': 'none',
          margin: 0,
        },
        'input::-webkit-inner-spin-button': {
          '-webkit-appearance': 'none',
          margin: 0,
        },
        '#root': {
          height: 'auto',
        },
      },
    },
    MuiInputBase: {
      input: {
        padding: '8px 12px !important',
      },
      inputAdornedStart: {
        paddingLeft: '0 !important',
      },
    },
  }
}
export default globalStyles
