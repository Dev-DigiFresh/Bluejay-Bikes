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
  const cardsData = getCards(cards);
  const getVideo = {
    title: homeData['Video Title'],
    url: homeData['Video URL']
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
    videoData: getVideo
  };
};

const getSocial = (homeData, brandLinks) => {
  const currentSocial = homeData['Social Links'];

  return currentSocial
    .map((links) => getDataFrom(brandLinks, links))
    .map((link) => ({ name: link['Name'], url: link['URL'] }));
};
