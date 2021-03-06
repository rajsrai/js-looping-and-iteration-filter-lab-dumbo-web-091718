// Code your solution in this file

function findMatching(drivers, name) {
  // drivers.toLowerCase
return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase())
  }

function fuzzyMatch(drivers, name) {
  return drivers.filter(driver => driver.startsWith(name))
}

function matchName(drivers, name) {
  return drivers.filter(driver => driver.name === name)

}
