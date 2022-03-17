import { loadAnimation } from 'lottie-web';
import { defineLordIconElement } from 'lord-icon-element';
import { Box } from '@chakra-ui/react';

defineLordIconElement(loadAnimation);

const ThumbsUpButton = ({ target, ...rest }) => {
  const textElement = `<lord-icon
src="https://cdn.lordicon.com/hrqwmuhr.json"
trigger="click"
stroke="80"
style="width:40px;height:40px"
target="${target}"
colors="primary:#ffffff,secondary:#ffffff"></lord-icon>`;

  return (
    <Box
      transform="rotate(180deg) scaleX(-1)"
      id="thumbsup-button"
      {...rest}
      dangerouslySetInnerHTML={{ __html: textElement }}></Box>
  );
};
export default ThumbsUpButton;
