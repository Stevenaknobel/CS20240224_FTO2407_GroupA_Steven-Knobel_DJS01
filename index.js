/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const parameters = {
  velocity: 10000, // velocity (km/h)
  acceleration: 3, // acceleration (m/s^2)
  time: 3600, // seconds (1 hour)
  distance: 0, //distance (km)
  fuel: 5000, // remaining fuel (kg)
  fuelBurnRate: 0.5 // fuel burn rate (kg/s)
}

//const d2 = d + (vel*time) //calcultes new distance
//create a new const that calculates the new distance
const calcNewDistance = ({distance, velocity, time}) => {
  return distance + (velocity * time);
};


//const rf = fbr*time //calculates remaining fuel
//create a new const to calculate remaining fuel
const calcRemainingFuel = ({fuel, fuelBurnRate, time}) => {
  const fuelUsed = fuelBurnRate * time;
  return fuel - fuelUsed;
}

//const vel2 = calcNewVel(acc, vel, time) //calculates new velocity based on acceleration
//create a new const to calculate remaining fuel
const calcNewVelocity = ({velocity, acceleration, time}) => {
  //convert velocity from KM/h to m/s
  const velocityMps = velocity * (1000/3600);
  const newVelocityMps = velocityMps + (acceleration*time);

  //change back to km/h
  return newVelocityMps * (3600/1000);
}


// Pick up an error with how the function below is called and make it robust to such errors
calcNewVel = (vel, acc, time) => { 
  return vel + (acc*time)
}

console.log(`Corrected New Velocity: ${vel2} km/h`);
console.log(`Corrected New Distance: ${d2} km`);
console.log(`Corrected Remaining Fuel: ${rf} kg`);






