/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */
/*
// Given Parameters
const vel = 10000; // velocity (km/h)
const acc = 3; // acceleration (m/s^2)
const time = 3600; // seconds (1 hour)
const d = 0; // distance (km)
const fuel = 5000; // remaining fuel (kg)
const fbr = 0.5; // fuel burn rate (kg/s)


const d2 = d + (vel*time) //calcultes new distance
const rf = fbr*time //calculates remaining fuel
const vel2 = calcNewVel(acc, vel, time) //calculates new velocity based on acceleration

// Pick up an error with how the function below is called and make it robust to such errors
calcNewVel = (vel, acc, time) => { 
  return vel + (acc*time)
}

console.log(`Corrected New Velocity: ${vel2} km/h`);
console.log(`Corrected New Distance: ${d2} km`);
console.log(`Corrected Remaining Fuel: ${rf} kg`);
*/



// // Function to calculate new velocity based on acceleration
// function calcNewVel(vel, acc, time) {
//   // Validate inputs
//   if (typeof vel !== 'number' || typeof acc !== 'number' || typeof time !== 'number') {
//     throw new Error("Invalid parameter types. Expected numbers.");
//   }
  
//   if (time < 0) {
//     throw new Error("Time must be non-negative.");
//   }
  
//   // Calculate new velocity in km/h
//   const newVelocity = vel + (acc * time);
//   return newVelocity;
// }

// // Calculate new distance in km
// function calcNewDistance(vel, time) {
//   // Validate inputs
//   if (typeof vel !== 'number' || typeof time !== 'number') {
//     throw new Error("Invalid parameter types. Expected numbers.");
//   }
  
//   if (time < 0) {
//     throw new Error("Time must be non-negative.");
//   }
  
//   // Convert velocity from km/h to m/s for calculation
//   const velocityInMs = vel * (1000 / 3600);
//   const newDistance = velocityInMs * time / 1000; // Convert back to km
  
//   return newDistance;
// }

// // Calculate remaining fuel
// function calcRemainingFuel(fuel, fbr, time) {
//   // Validate inputs
//   if (typeof fuel !== 'number' || typeof fbr !== 'number' || typeof time !== 'number') {
//     throw new Error("Invalid parameter types. Expected numbers.");
//   }
  
//   if (time < 0) {
//     throw new Error("Time must be non-negative.");
//   }
  
//   // Calculate remaining fuel
//   const remainingFuel = fuel - (fbr * time);
  
//   if (remainingFuel < 0) {
//     throw new Error("Remaining fuel cannot be negative.");
//   }
  
//   return remainingFuel;
// }

// // Given parameters
// const velocity = 10000; // velocity (km/h)
// const acceleration = 3; // acceleration (m/s^2)
// const time = 3600; // seconds (1 hour)
// const initialDistance = 0; // distance (km)
// const initialFuel = 5000; // remaining fuel (kg)
// const fuelBurnRate = 0.5; // fuel burn rate (kg/s)

// // Calculate new velocity
// const newVelocity = calcNewVel(velocity, acceleration, time);
// console.log(`Corrected New Velocity: ${newVelocity} km/h`);

// // Calculate new distance
// const newDistance = calcNewDistance(velocity, time);
// console.log(`Corrected New Distance: ${initialDistance + newDistance} km`);

// // Calculate remaining fuel
// const remainingFuel = calcRemainingFuel(initialFuel, fuelBurnRate, time);
// console.log(`Corrected Remaining Fuel: ${remainingFuel} kg`);

// function sayHello (name) {
// console.log('hello' + name  + '!');
// console.log('-----------' );
// console.log('---------');
// }
// {
//   sayHello('bob');
// sayHello('johannes');
// sayHello('stshirwana');
// }

// function calculateTax(amount) {
//   let result = amount * 0.99;
//   return result;
// }
//  let sars = calculateTax(100);
//  console.log(sars);

// for(i = 0; i < 10; i++) {
//   console.log(i);
// }


// for (i=10;i < 50;i++){
//   console.log(i);
// }

// for (i=50;i <80; i++);
// console.log(i);

// let y = 50;
// while (y>20){
//   console.log(y++);
// }
// for (let i = 0; i < 10; i++) {
//   if (i === 5) {
//     break;
//   }
//   console.log(i);
// }

// Given parameters as an object (similar to props in React)
const parameters = {
  initialVelocity: 10000, // velocity (km/h)
  acceleration: 3, // acceleration (m/s^2)
  time: 3600, // seconds (1 hour)
  initialDistance: 0, // distance (km)
  remainingFuel: 5000, // remaining fuel (kg)
  fuelBurnRate: 0.5 // fuel burn rate (kg/s)
};

// Function to calculate new velocity based on acceleration
function calcNewVel(props) {
  // Destructure props object to get the necessary variables
  const { initialVelocity, acceleration, time } = props;

  // Convert acceleration from m/s^2 to km/h and calculate the change in velocity
  const changeInVelocity = acceleration * time * 3.6;

  // Return new velocity
  return initialVelocity + changeInVelocity;
}

// Function to calculate new distance
function calcNewDistance(props) {
  // Destructure props object to get the necessary variables
  const { initialVelocity, initialDistance, time } = props;

  // Convert time from seconds to hours and calculate new distance
  return initialDistance + (initialVelocity * (time / 3600));
}

// Function to calculate remaining fuel
function calcRemainingFuel(props) {
  // Destructure props object to get the necessary variables
  const { remainingFuel, fuelBurnRate, time } = props;

  // Calculate remaining fuel
  return remainingFuel - (fuelBurnRate * time);
}

// Calculate corrected new velocity
let correctedNewVelocity;
try {
  // Pass the parameters object as props to the calcNewVel function
  correctedNewVelocity = calcNewVel(parameters);
} catch (error) {
  console.error(`Error: ${error.message}`);
  correctedNewVelocity = parameters.initialVelocity; // Use initial velocity as a fallback
}

// Calculate corrected new distance and remaining fuel
// Pass the parameters object as props to the calcNewDistance and calcRemainingFuel functions
const correctedNewDistance = calcNewDistance(parameters);
const correctedRemainingFuel = calcRemainingFuel(parameters);

// Output the results
console.log(`Corrected New Velocity: ${correctedNewVelocity.toFixed(2)} km/h`);
console.log(`Corrected New Distance: ${correctedNewDistance.toFixed(2)} km`);
console.log(`Corrected Remaining Fuel: ${correctedRemainingFuel} kg`);

