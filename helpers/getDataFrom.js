const getDataFrom = (data, id) => data.find(({ id: dataId }) => dataId === id)?.fields;

export default getDataFrom;
