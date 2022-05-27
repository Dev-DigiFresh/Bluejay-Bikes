import { Box, Image, Text } from '@chakra-ui/react';
import BgImgDiv, { FloatingChildren } from 'atoms/BgImgDiv';
import ShareIcon from 'atoms/ShareIcon';

const NewportHeader = ({ title, background, logo, description, officialSite }) => (
  <BgImgDiv h="340px" image={background}>
    <Box h="100%">
      <FloatingChildren justifyContent="flex-start">
        <Box
          display={['block', 'none']}
          onClick={async () => {
            await navigator.share({
              title: title,
              text: description,
              url: window.location.href
            });
          }}
          id-analytics-group="share"
          id-analytics-name="Share-Button">
          <ShareIcon />
        </Box>
        <a href={officialSite} className="ue" target="_blank" rel="noopener noreferrer">
          <Image w="229px" h="104px" src={logo} />
        </a>
        {title && (
          <Text color="brand.secondary" variant="title" mt="15px" mb="10px" fontWeight="bold">
            {title}
          </Text>
        )}
        {description && (
          <Text color="brand.secondary" variant="subtext">
            {description}
          </Text>
        )}
      </FloatingChildren>
    </Box>
  </BgImgDiv>
);

export default NewportHeader;
