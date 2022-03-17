import { Box } from '@chakra-ui/react';
import DigiNewsletter from '@digiwill/digifresh.newsletter';
import { defaultInputStyle, slideInputStyle } from 'molecules/Newsletter/styles';

const widthStyle = {
  div: {
    w: '100%',
    maxW: 'unset'
  },
  p: {
    color: '#fff',
    fontSize: '0.85rem',
    '&:first-of-type': {
      fontSize: '2.57em',
      mb: '20px',
      maxW: 'unset'
    }
  },
  input: {
    maxW: '272px',
    width: '100%',
    mb: '20px'
  },
  button: {
    color: '#fff',
    maxW: '130px',
    fontSize: '1.16em',
    width: '100%',
    height: '42px',
    border: '2px solid currentColor',
    bgColor: 'transparent',
    borderRadius: '108px'
  }
};

const Newsletter = ({
  title,
  description,
  idAnalyticsName,
  idAnalyticsGroup,
  slideVersion,
  newsletterAction,
  newsletterId
}) => {
  const inputStyle = slideVersion ? slideInputStyle : defaultInputStyle;
  const variant = slideVersion ? 'slideNewsletter' : 'newsletter';

  return (
    <form
      action={newsletterAction}
      method="post"
      target="_blank"
      noValidate={true}
      id="mc-embedded-subscribe-form"
      name="mc-embedded-subscribe-form">
      <Box d="none">
        <input type="text" name={newsletterId} tabIndex="-1" value="" />
      </Box>

      <Box sx={widthStyle}>
        <DigiNewsletter
          title={title}
          description={description}
          variant={variant}
          buttonText="Submit"
          idAnalyticsName={idAnalyticsName}
          idAnalyticsGroup={idAnalyticsGroup}
          input={inputStyle}
        />
      </Box>
    </form>
  );
};

export default Newsletter;
