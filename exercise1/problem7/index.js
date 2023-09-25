function isPrimitive(val) {
  return !(val instanceof Object);
}

/*
function isPrimitive(val) {
  return val !== Object(val);
}
*/

/*
function isPrimitive(val) {
  const primitives = [
    'boolean', 'number', 'bigint',
    'string', 'undefined', 'symbol'
  ];
  return val === null
  || primitives.includes(typeof val);
}
*/

/*
function isPrimitive(val) {
  const nonPrimitives = [
    'object', 'function'
  ];
  return val === null
  || !(nonPrimitives.includes(typeof val));
}
*/

module.exports = isPrimitive;