const slickStyle = {
  '.slick-dots': {
    bottom: '-35px',
    li: {
      width: '8px',
      height: '8px',
      margin: '0 8px'
    },
    'li.slick-active button': {
      opacity: '1'
    },
    'li button': {
      borderRadius: 'full',
      border: '2px solid',
      background: 'storyslider.dots',
      opacity: '0.2',
      width: '8px',
      height: '8px',
      '&::before': {
        display: 'none'
      },
      '&:focus': {
        border: '2px solid var(--chakra-colors-storyslider-dots) !important'
      }
    }
  }
};

export default slickStyle;
