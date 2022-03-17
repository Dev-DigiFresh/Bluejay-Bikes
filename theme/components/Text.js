const medium = '1em'; //18px
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
    topbar: {
      ...variants.text,
      color: '#fff',
      fontWeight: '600',
      textAlign: 'center',
      fontSize: '.76em',
      letterSpacing: '1px'
    },
    'tag.normal': {
      ...variants.text,
      fontWeight: '700'
    },
    'tag.small': {
      fontSize: '1.166em',
      lineHeight: '14.4px',
      fontWeight: '700'
    },
    'intro.title': {
      ...variants.title,
      textAlign: 'center'
    },
    'intro.description': {
      ...variants.text,
      fontSize: medium,
      textAlign: 'center',
      maxW: '360px',
      m: '10px auto 30px'
    },
    'productcarousel.title': {
      ...variants.title,
      textAlign: 'center'
    },
    'minislidercard.title': {
      ...variants.text,
      lineHeight: '17px',
      textAlign: 'center',
      fontWeight: '700'
    },
    'aboutus.title': {
      ...variants.title,
      my: '11px',
      textAlign: 'center'
    },
    'aboutus.description': {
      fontSize: '1.285em',
      lineHeight: '25px',
      mb: '26px',
      textAlign: 'center',
      ...variants.text
    },
    ...newsletter,
    'slideNewsletter.title': {
      ...newsletter['newsletter.title']
    },
    'slideNewsletter.description': {
      ...newsletter['newsletter.description'],
      fontWeight: 'bold',
      fontSize: '1.28em',
      maxW: ['200px', '320px'],
      mt: '10px',
      lineHeight: ['18px', '31px'],
      textAlign: 'center'
    },
    'productpopup.title': {
      ...variants.title,
      mt: '23px',
      mb: '20px',
      textAlign: 'center'
    },
    'productpopup.description': {
      ...variants.text,
      textAlign: 'center',
      lineHeight: '18.2px',
      maxW: '313px',
      mx: 'auto'
    },
    'productCard.title': {
      ...variants.subtext,
      maxW: '140px',
      mx: 'auto',
      fontWeight: 'bold',
      textAlign: 'center',
      lineHeight: '18px'
    },
    'productCard.description': {
      ...variants.text,
      fontWeight: 'bold',
      mt: '8px',
      mb: '26px'
    }
  }
};

export default Text;
