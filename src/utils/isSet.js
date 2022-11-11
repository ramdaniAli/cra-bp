function isSet(value) {
  return typeof value !== "undefined" && value !== null && value !== {};
}

export default isSet;
