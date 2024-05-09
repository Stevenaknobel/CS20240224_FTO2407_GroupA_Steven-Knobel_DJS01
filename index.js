
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

