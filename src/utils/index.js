/* global window */
import classnames from 'classnames'
import lodash from 'lodash'
import moment from 'moment'
import config from './config'

const formatMoney = function(money, decimal = 2) {
  if (Number(money) === 0 || Number.isNaN(Number(money))) return '0.00';
  return Number(money)
    .toFixed(decimal)
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

module.exports = {
  config,
  classnames,
  moment,
  formatMoney
}
