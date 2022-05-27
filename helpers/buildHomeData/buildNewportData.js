import get from 'lodash.get';

import joinLinks from 'helpers/joinLinks';
import getDataFrom from 'helpers/getDataFrom';
import getCards from 'helpers/getCards';
// import parseVideoBlock from 'helpers/parseVideoBlock';

// TODO: break it into various functions
export const buildNewportData = (data, pageIndex) => {
  const homeData = get(data, `mainpage[${pageIndex}].fields`);
  const brandLinks = get(data, 'brandlinks');
  const cards = get(data, 'cards');
  // const videos = get(data, 'videos');
  const collapseLinks = homeData['Quick Links'].map((links) => getDataFrom(brandLinks, links));
  const brandLinkAllProducts = brandLinks.find(({ fields }) => fields.Name === 'See All Products');
  const cardsData = getCards(cards);

  return {
    homeData,
    productsTitle: get(homeData, 'Products Title'),
    products: get(data, 'products'),
    collapseLinks,
    socialLinks: getSocial(homeData, brandLinks),
    allProductsUrl: brandLinkAllProducts?.fields?.URL,
    links: joinLinks(brandLinks),
    cardsData
    // ...getIntroData(homeData, videos),
    // ...getRegistrationData(homeData, brandLinks),
    // ...getWinData(homeData, brandLinks)
  };
};

const getSocial = (homeData, brandLinks) => {
  const currentSocial = homeData['Social Links'];

  return currentSocial
    .map((links) => getDataFrom(brandLinks, links))
    .map((link) => ({ name: link['Name'], url: link['URL'] }));
};

// const getIntroData = (homeData, videos) => {
//   const currentVideo = homeData['Intro Video'][0];
//   const video = getDataFrom(videos, currentVideo);
//   const parsedVideo = parseVideoBlock(video);

//   return {
//     intro: {
//       videoUrl: parsedVideo.url,
//       videoImg: parsedVideo.img,
//       title: homeData['Intro Title'],
//       subtitle: homeData['Intro Sub Title']
//     }
//   };
// };

// const getRegistrationData = (homeData, brandLinks) => {
//   const icon = homeData?.['Registration Icon']?.[0].url;
//   const title = homeData?.['Registration Title'];
//   const description = homeData?.['Registration Description'];
//   const buttonId = homeData?.['Registration Button'][0];
//   const button = getDataFrom(brandLinks, buttonId);
//   return {
//     registration: {
//       icon,
//       title,
//       description
//       button: {
//         url: button?.['URL'],
//         text: button?.['Title']
//       }
//     }
//   };
// };

// const getWinData = (homeData, brandLinks) => {
//   const image = homeData?.['Win Image']?.[0].url;
//   const title = homeData?.['Win Title'];
//   const subTitle = homeData?.['Win Sub Title'];

//   const buttonId = homeData?.['Win Button'][0];
//   const button = getDataFrom(brandLinks, buttonId);

//   return {
//     win: {
//       image,
//       title,
//       subTitle,
//       button: {
//         url: button?.['URL'],
//         text: button?.['Title']
//       }
//     }
//   };
// };
