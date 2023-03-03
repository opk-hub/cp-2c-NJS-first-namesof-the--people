const peopleNamesList = require("../country/state/city/index");
const firstNamesPeople = require("../utilities/utils/index");

const getPeopleInCity = (peopleNamesList) => {
  return firstNamesPeople(peopleNamesList);
};

module.exports = getPeopleInCity;
console.log(getPeopleInCity);
