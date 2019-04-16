// Code your solution in this file!
function logDriverNames(driver) {
  const stringify = function (agg, el, i, arr) {
  let stringifiedElement = el.name + ' is $' + el.price + '. ';
 
  if (i === arr.length - 1) {
    stringifiedElement += 'The total price is $' + (agg.totalPrice + el.price) + '.';
 
    return agg.string + stringifiedElement;
  }
 
  return {
    string: agg.string + stringifiedElement,
    totalPrice: agg.totalPrice + el.price
  };
};
 
products.reduce(stringify, { string: '', totalPrice: 0 });
}