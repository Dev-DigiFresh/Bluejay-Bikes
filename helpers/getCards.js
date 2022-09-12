const isEmpty = (obj) => !Object.keys(obj).length;

const getCards = (cards) =>
  cards.reduce((acc, card) => {
    if (isEmpty(card)) {
      return [...acc];
    }
    const data = {
      name: card['Title'],
      description: card['Description'],
      image: card?.['Bike Image'][0].url,
      button: {
        text: card['Button Text'],
        link: card['Button URL']
      }
    };

    return [...acc, data];
  }, []);

export default getCards;
