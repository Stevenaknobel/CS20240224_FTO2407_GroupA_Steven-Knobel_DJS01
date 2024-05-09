// Given parameters as an object (similar to props in React)
const parameters = {
    initialVelocity: {
      value: 10000, // Initial velocity value (10000 km/h)
      measurement: "km/h" // Unit of measurement for velocity
    },
    acceleration: {
      value: 3, // Acceleration value (3 m/s^2)
      measurement: "m/s^2" // Unit of measurement for acceleration
    },
    timeSeconds: {
      value: 3600, // Time value (3600 seconds or 1 hour)
      measurement: "s" // Unit of measurement for time
    },
    initialDistance: {
      value: 0, // Initial distance value (0 km)
      measurement: "km" // Unit of measurement for distance
    },
    remainingFuel: {
      value: 5000, // Initial fuel value (5000 kg)
      measurement: "kg" // Unit of measurement for fuel
    },
    fuelBurnRate: {
      value: 0.5, // Fuel burn rate value (0.5 kg/s)
      measurement: "kg/s" // Unit of measurement for fuel burn rate
    }
  };
  
  // Function to calculate new velocity based on acceleration
  function calcNewVel(props) {
    // Destructure props object to get the necessary properties
    const { initialVelocity, acceleration, timeSeconds } = props;
  
    // Convert acceleration from m/s^2 to km/h and calculate the change in velocity
    const changeInVelocity = acceleration.value * timeSeconds.value * 3.6;
  
    // Calculate and return the new velocity
    return initialVelocity.value + changeInVelocity;
  }
  
  // Function to calculate new distance
  function calcNewDistance(props) {
    // Destructure props object to get the necessary properties
    const { initialVelocity, initialDistance, timeSeconds } = props;
  
    // Convert time from seconds to hours and calculate the new distance
    const timeInHours = timeSeconds.value / 3600;
    return initialDistance.value + (initialVelocity.value * timeInHours);
  }
  
  // Function to calculate remaining fuel
  function calcRemainingFuel(props) {
    // Destructure props object to get the necessary properties
    const { remainingFuel, fuelBurnRate, timeSeconds } = props;
  
    // Calculate remaining fuel
    return remainingFuel.value - (fuelBurnRate.value * timeSeconds.value);
  }
  
  // Calculate corrected new velocity
  let correctedNewVelocity = calcNewVel(parameters);
  
  // Calculate corrected new distance and remaining fuel
  const correctedNewDistance = calcNewDistance(parameters);
  const correctedRemainingFuel = calcRemainingFuel(parameters);
  
  // Expected values for the corrected results
  const expectedNewVelocity = 48880; // Expected velocity in km/h
  const expectedNewDistance = 10000; // Expected distance in km
  const expectedRemainingFuel = 3200; // Expected remaining fuel in kg
  
  // Check the calculated results against the expected values
  if (
    correctedNewVelocity.toFixed(2) != expectedNewVelocity.toFixed(2) ||
    correctedNewDistance.toFixed(2) != expectedNewDistance.toFixed(2) ||
    correctedRemainingFuel != expectedRemainingFuel
  ) {
    console.error("Error: Calculated results do not match expected values!");
  } else {
    console.log("All calculated results match expected values.");
  }
  
  // Output the corrected results
  console.log(`Corrected New Velocity: ${correctedNewVelocity.toFixed(2)} km/h`);
  console.log(`Corrected New Distance: ${correctedNewDistance.toFixed(2)} km`);
  console.log(`Corrected Remaining Fuel: ${correctedRemainingFuel} kg`);
  