const variants = {
  normal: {
    fontSize: ['14px', '16px'],
    color: '#fff',
    bgColor: 'background.button',
    fontWeight: '900',
    borderRadius: '0',
    lineHeight: '19.12px',
    letterSpacing: '0.04em',
    textTransform: 'uppercase',
    boxShadow: '0px 9px 20px rgba(93, 128, 166, 0.2)',
    overflow: 'hidden',
    maxW: '100%',
    '&:disabled': {
      pointerEvents: 'none',
      '&:hover': {
        bgColor: 'background.button'
      }
    }
  },
  'newsletter.button': {
    borderRadius: 'full',
    fontSize: '14px',
    fontWeight: '800',
    lineHeight: '14px',
    w: '100%',
    backgroundColor: '#FFF',
    color: 'brand.main'
  }
};

const Button = {
  variants
};

export default Button;
