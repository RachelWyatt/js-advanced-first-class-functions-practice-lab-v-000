// Code your solution in this file!
    
function logDriverNames(drivers){
  drivers.forEach((driver)=> {
    console.log(driver.name)
  })
}

function logDriversByHometown(drivers, location){
  drivers.forEach((driver)=> {
    if (location === driver.hometown) {
    console.log(driver.name)
    }
  })
}

function driversByRevenue(drivers){
  drivers.sort((driver)=> {
    if (location === driver.hometown) {
    console.log(driver.name)
    }
  })
}