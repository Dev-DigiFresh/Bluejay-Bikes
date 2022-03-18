const parseVideoBlock = (video) => ({
  img: video?.['Image'][0].url,
  name: video?.['Name'],
  title: video?.['Title'],
  url: video?.['URL']
});

export default parseVideoBlock;
