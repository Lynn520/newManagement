const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';
/**
 *
 * @param {string} base: eg. 'SEARCH_ADDRESS'
 * @returns {object}
 *
 */
export function createTypes(base) {
  return [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
    acc[`${type}`] = `${base}_${type}`;
    return acc;
  }, {});
}
{REQUEST:'TEST_REQUEST'}
/**
 * @param {object} types
 * @returns {Object}
 */
export function createActions(types) {
  return {
    request: params => ({ type: types.REQUEST, params }),
    success: response => {
      // console.log('res2>>>',response)
      return({ type: types.SUCCESS, response })},
    failure: error => ({ type: types.FAILURE, error }),
  };
}
