import { Box, Image, Text } from '@chakra-ui/react';
import BgImgDiv, { FloatingChildren } from 'atoms/BgImgDiv';
import ShareIcon from 'atoms/ShareIcon';

const Header = ({ title, logo, description, officialSite }) => (
  <BgImgDiv h="300px">
    <FloatingChildren>
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
        <Image maxW="209px" src={logo} />
      </a>
      {title && (
        <Text color="brand.secondary" variant="title" mt="15px" mb="10px" fontWeight="bold">
          {title}
        </Text>
      )}
      {description && (
        <Text color="brand.secondary" variant="subtext" mb="10px">
          {description}
        </Text>
      )}
    </FloatingChildren>
  </BgImgDiv>
);

export default Header;
