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
  const collapseLinks = homeData['Quick Links'].map((links) => getDataFrom(brandLinks, links));
  const brandLinkAllProducts = brandLinks.find(({ fields }) => fields.Name === 'See All Products');
  const currentCards = homeData['Cards'].map((card) => getDataFrom(cards, card));
  const cardsData = getCards(currentCards);
  const emailCaptureData = get(data, `emailcapture[${pageIndex}].fields`);
  const getVideo = {
    title: homeData['Video Title'],
    url: homeData['Video URL']
  };

  const emailCapture = {
    title: emailCaptureData['Title'],
    name: emailCaptureData['Name'],
    description: emailCaptureData['Description'],
    email: emailCaptureData['Email']
  };

  return {
    homeData,
    productsTitle: get(homeData, 'Products Title'),
    products: get(data, 'products'),
    collapseLinks,
    socialLinks: getSocial(homeData, brandLinks),
    allProductsUrl: brandLinkAllProducts?.fields?.URL,
    links: joinLinks(brandLinks),
    cardsData,
    videoData: getVideo,
    emailCapture
  };
};

const getSocial = (homeData, brandLinks) => {
  const currentSocial = homeData['Social Links'];

  return currentSocial
    .map((links) => getDataFrom(brandLinks, links))
    .map((link) => ({ name: link['Name'], url: link['URL'] }));
};
