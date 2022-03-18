const big = '32px'; //24px

const variants = {
  title: {
    fontSize: big,
    lineHeight: '36px',
    fontWeight: '900'
  },
  text: {
    whiteSpace: 'pre-line'
  }
};

const newsletter = {
  'newsletter.title': {
    fontSize: '2em',
    lineHeight: '28px',
    fontWeight: '700',
    mb: '5px'
  },
  'newsletter.description': {
    fontSize: '1.28em',
    lineHeight: '23.4px',
    fontWeight: '400',
    maxW: '261px',
    mb: '26px'
  }
};

const Text = {
  variants: {
    ...variants,
    badge: {
      ...variants.small,
      lineHeight: '23px',
      fontWeight: '700',
      borderRadius: 'full',
      bgColor: 'background.button',
      color: '#fff',
      width: '58px',
      height: '22px'
    },

    ...newsletter,
    small: {
      ...variants.text,
      fontSize: ['12px', '14px'],
      textAlign: 'left',
      lineHeight: '15.6px'
    }
  }
};

export default Text;
