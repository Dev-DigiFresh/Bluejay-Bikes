export const getHeader = (homeData) => {
  return {
    headerTitle: homeData?.['Header Title'],
    headerDescription: homeData?.['Header Descriptor'],
    pageLogo: homeData?.['Header Image'][0].url,
    headerButton: homeData?.['Email Button']
  };
};
