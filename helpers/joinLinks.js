import camelCase from 'lodash.camelcase';

const regexFromParathesisToEnd = /\s\(.*/;

const joinLinks = (links) =>
  links.reduce((acc, link) => {
    const { fields } = link;
    const name = fields.Name.replace(regexFromParathesisToEnd, '').trim();

    return {
      ...acc,
      [camelCase(name)]: fields.URL
    };
  }, {});

export default joinLinks;
