function makeTitle(thisID) {
  return thisID.replace(/-/g, " ").replace(/\b[a-z]/g, function () {
    return arguments[0].toUpperCase();
  });
}

console.log(makeTitle("athlete-profile"));
