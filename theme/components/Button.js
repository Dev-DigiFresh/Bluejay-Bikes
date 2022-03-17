const variants = {
  normal: {
    fontSize: '1em',
    color: 'brand.main',
    borderRadius: 'full',
    bgColor: 'background.button',
    fontWeight: 'normal',
    lineHeight: '16.1px'
  },
  badge: {
    fontSize: '1em',
    color: 'brand.main',
    border: '2px solid',
    borderColor: 'brand.main',
    borderRadius: 'full',
    fontWeight: '700',
    lineHeight: '16.8px',
    bgColor: '#fff',
    display: 'flex'
  },
  secondary: {
    color: 'brand.main',
    h: '54px',
    fontSize: '1em',
    fontWeight: 'bold',
    w: '100%',
    borderRadius: 'full',
    border: '2px solid',
    borderColor: 'brand.main',
    '&:focus': {
      boxShadow: 'inset 0px 4px 20px rgba(0, 0, 0, 0.08) !important'
    }
  },
  newsletter: {
    w: '100%',
    maxWidth: '210px',
    height: '46px',
    fontSize: '0.875rem',
    bgColor: 'background.button',
    borderRadius: '27px',
    color: '#fff'
  }
};

const Button = {
  variants: {
    ...variants,
    intro: {
      ...variants.secondary,
      h: '39px',
      px: '25px',
      w: 'auto',
      minW: 'auto'
    },
    empty: {
      ...variants.secondary,
      bgColor: 'white',
      borderWidth: 0
    },
    green: {
      ...variants.secondary,
      color: 'background.button',
      borderColor: 'background.button',
      maxWidth: '130px',
      h: '42px'
    },
    header: {
      ...variants.newsletter,
      height: '36px',
      fontSize: '1em',
      p: '22px',
      mt: '20px'
    },
    slider: {
      ...variants.normal,
      boxShadow: 'none',
      borderRadius: 'simple',
      fontWeight: 'bold',
      fontSize: '1em'
    },
    sliderDisabled: {
      ...variants.slider,
      bgColor: '#d6d6d6',
      pointerEvents: 'none',
      cursor: 'auto'
    },
    floating: {
      ...variants.normal,
      right: '20px',
      bottom: '25px'
    },
    outline: {
      borderRadius: 'full',
      maxWidth: '240px',
      width: '100%',
      fontSize: '1em',
      lineHeight: '16.8px',
      fontWeight: 'bold',
      color: 'background.button',
      borderWidth: '2px',
      borderColor: 'background.button',
      h: '45px'
    },
    social: {
      color: 'white',
      borderRadius: 'full',
      bgColor: 'background.button',
      alignItems: 'center',
      lineHeight: '16.1px',
      padding: '0',
      transform: true,
      w: '60px',
      h: '60px'
    },
    disabled: {
      ...variants.normal,
      bgColor: '#d6d6d6',
      cursor: 'auto',
      boxShadow: 'none',
      pointerEvents: 'none'
    }
  }
};

export default Button;
