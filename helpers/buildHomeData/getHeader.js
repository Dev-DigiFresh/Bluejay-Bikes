export const getHeader = (homeData) => ({
  headerTitle: homeData?.['Header Title'],
  headerDescription: homeData?.['Header Descriptor'],
  headerImage: homeData?.['Header Image'][0].url,
  pageLogo: homeData?.['Logo'][0].url,
  headerButton: homeData?.['Email Button']
});
