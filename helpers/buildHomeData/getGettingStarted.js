import getDataFrom from 'helpers/getDataFrom';
import parseVideoBlock from 'helpers/parseVideoBlock';

const getGettingStarted = (homeData, allVideos) => {
  const videoIds = homeData['Getting Started - Videos'];
  const videos = videoIds.map((id) => getDataFrom(allVideos, id)).map(parseVideoBlock);

  const title = homeData['Getting Started - title'];

  return {
    gettingStarted: {
      title,
      videos
    }
  };
};

export default getGettingStarted;
