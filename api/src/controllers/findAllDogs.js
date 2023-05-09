const getApiInfo = require('./getApiInfo');
const getDbInfo = require('./getDbInfo');

const findAllDogs = async (query) => {
    const apiInfo = await getApiInfo();
    const dbInfo = await getDbInfo();
    const allInfo = apiInfo.concat(dbInfo);
    return allInfo;
}

module.exports = findAllDogs;