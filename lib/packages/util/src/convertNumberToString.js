/**
 * Original work Copyright (c) 2018 PoC-Consortium
 * Modified work Copyright (c) 2019 Burst Apps Team
 */
/**
* Helper method to Number to String(8 decimals) representation
* @param n the number
* @return a NQT number string
*/
exports.convertNumberToString = function (n) {
    return parseFloat(n.toString()).toFixed(8).replace('.', '');
};