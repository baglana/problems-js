function removeABC(string) {
  const regex = /[abc]/g;
  if (!regex.test(string)) {
    return null;
  }
  return string.replaceAll(regex, '');
}

module.exports = removeABC;