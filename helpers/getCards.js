const isEmpty = (obj) => !Object.keys(obj).length;

const getCards = (cards) =>
  cards.reduce((acc, card) => {
    const { fields } = card;
    if (isEmpty(fields)) {
      return [...acc];
    }
    const data = {
      name: fields['Name'],
      description: fields['Description'],
      image: fields?.['Bike Image'][0].url,
      button: {
        text: fields['Button Text'],
        link: fields['Button URL']
      }
    };

    return [...acc, data];
  }, []);

export default getCards;
