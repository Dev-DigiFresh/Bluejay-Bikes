const globalStyles = {
  global: {
    body: {
      padding: 0,
      margin: 0,
      fontSize: '18px',
      color: 'main',
      fontFamily: 'Avenir',
      lineHeight: '23px',
      '*:focus': {
        boxShadow: 'none!important'
      }
    },
    a: {
      color: 'inherit',
      textDecoration: 'none!important'
    },
    '*': {
      boxSizing: 'border-box',
      transition: 'all .1s ease',
      outline: 'none'
    },
    svg: {
      textRendering: 'optimizeLegibility'
    }
  }
};

export default globalStyles;
