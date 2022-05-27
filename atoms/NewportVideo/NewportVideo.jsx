import { Center } from '@chakra-ui/react';
import YouTubePlayer from 'react-player/youtube';

const NewportVideo = ({ url }) => (
  <Center h={['188px', '320px']}>
    <YouTubePlayer url={url} controls width="100%" height="100%" />
  </Center>
);

export default NewportVideo;
