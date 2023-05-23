const getApiInfo = require('./getApiInfo');
const getDbInfo = require('./getDbInfo');

const findAllDogs = async (query) => {
  const apiInfo = await getApiInfo();
  const dbInfo = await getDbInfo();
  const allInfo = apiInfo.concat(dbInfo);
  allInfo.sort((a, b) => a.name.localeCompare(b.name));

  return allInfo;
}

module.exports = findAllDogs;