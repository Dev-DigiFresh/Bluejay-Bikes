import get from 'lodash.get';

import joinLinks from 'helpers/joinLinks';
import getDataFrom from 'helpers/getDataFrom';

// TODO: break it into various functions
const buildHomeData = (data, pageIndex) => {
  const homeData = get(data, `mainpage[${pageIndex}].fields`);
  const brandLinks = get(data, 'brandlinks');
  const companies = get(data, 'companies');
  const collapseLinks = homeData['Quick Links'].map((links) => getDataFrom(brandLinks, links));
  const brandLinkAllProducts = brandLinks.find(({ fields }) => fields.Name === 'See All Products');

  const newsletter = getNewsletter(data);
  const interstitialConfig = {
    ...newsletter,
    emailCaptureImg: ''
  };

  return {
    homeData,
    productsTitle: get(homeData, 'Products Title'),
    products: get(data, 'products'),
    collapseLinks,
    socialLinks: getSocial(homeData, brandLinks),
    allProductsUrl: brandLinkAllProducts?.fields?.URL,
    newsletterData: newsletter,
    ...getVideo(homeData),
    interstitialConfig,
    links: joinLinks(brandLinks),
    introImage: homeData?.['Intro Background Image'][0].url,
    introTitle: homeData['Intro Title'],
    introDescription: homeData['Intro Description'],
    ...getCompanies(homeData, companies)
  };
};

const getVideo = (homeData) => {
  const videoPrefix = 'https://www.youtube.com/embed/';
  const videoCode = homeData?.['Video URL'].split('=').pop();

  return {
    videoTitle: homeData['Vid Title'],
    videoUrl: `${videoPrefix}${videoCode}`
  };
};

const getSocial = (homeData, brandLinks) => {
  const currentSocial = homeData['Social'];

  return currentSocial
    .map((links) => getDataFrom(brandLinks, links))
    .map((link) => ({ name: link['Name'], url: link['URL'] }));
};

const getNewsletter = (data) => {
  const newsletterData = get(data, 'emailcapture[0].fields');

  return {
    newsletterData,
    title: newsletterData['Title'],
    description: newsletterData['Description'],
    newsletterAction: newsletterData['Mailchimp Link'],
    newsletterId: newsletterData['Mailchimp ID']
  };
};

const getCompanies = (homeData, allCompanies) => {
  const companies = allCompanies
    ?.filter(({ id }) => homeData?.['Companies Cards'].includes(id))
    ?.map(({ fields }) => ({ url: fields?.['URL'], img: fields?.['Attachments'][0].url }));

  if (companies.length % 2) {
    companies.push({ lastItem: true });
  }

  return {
    companyTitle: homeData?.['Companies Title'],
    companies
  };
};

export default buildHomeData;
