const ftoc = function(fahr) {

  let celcius = (fahr - 32) * 0.556
  let rounded = Math.round(celcius * 10) / 10
  return rounded
};

const ctof = function(celc) {

  let fahrenheit = celc * 1.8 + 32
  let rounded = Math.round(fahrenheit * 10) / 10
  return rounded
};

module.exports = {
  ftoc,
  ctof
};
