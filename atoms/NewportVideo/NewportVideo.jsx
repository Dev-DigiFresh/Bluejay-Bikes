import { Center } from '@chakra-ui/react';
import YouTubePlayer from 'react-player/youtube';

const NewportVideo = ({ url }) => (
  <Center maxW="377px" maxH="188px">
    <YouTubePlayer url={url} controls width="100%" height="100%" />
  </Center>
);

export default NewportVideo;
